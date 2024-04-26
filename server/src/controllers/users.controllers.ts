import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from "crypto"
import { NextFunction, Request, Response } from "express";
import {
  User,
  validateUserLogin,
  validateUserRegistration,
  validateUserPasswordReset,
  validateUserPasswordDetails
} from '../Models/User';
import AppMail from "../services/mail/mail";

export const createUser = async (req: Request, res: Response) => {
  const { error } = validateUserRegistration(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const userExists = Boolean(
    await User.findOne({
      email: req.body.email,
    }).countDocuments()
  );

  if (userExists)
    return res.status(400).json({
      message: 'Email is already taken',
    });

  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    imageUrl: req.body.imageUrl,
  });

  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  user.password = hashedPassword;

  await user.save();

  user.password = '';

  res.json({ message: 'User registerd', user });
};


export const login = async (req: Request, res: Response) => {
  const { error } = validateUserLogin(req.body);
  if (error)
    return res.status(400).json({
      message: error.details[0].message,
    });

  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(404).json({ message: 'Invalid email or password.' });

  const passwordValid = await bcrypt.compare(req.body.password, user.password);
  if (!passwordValid)
    return res.status(400).json({ message: 'Invalid email or password.' });

  const token = jwt.sign({id: user._id }, `${process.env.JWT_PRIVATE_KEY}`);

  res.json({ message: 'You are logged in.', token });
};


const generateResetToken = () => {
  const token = crypto.randomBytes(32).toString("hex")
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex")
  return hashedToken;
}

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  const { error } = validateUserPasswordReset(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "user not found" });

  try {
    const token = generateResetToken();
    const link = `https://localhost:5173/password/reset/${token}`;

    user.resetToken = token;
    user.tokenExpiration = Date.now() + 10 * 60 * 1000;
    await user.save()
    
    new AppMail(user.email, user.firstname, link).resetEmailMessage();
    res.status(200).json({ message: "Password reset link sent to email" });
    
  } catch (emailError) {
    return res.status(500).json({ message: "Failed to send reset email" });
  }
};


export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userTokenFound = await User.findOne({resetToken: req.params.token})
    if(!userTokenFound){
      return res.status(404).json({message: "token do not exist"})
    }

    if (userTokenFound.tokenExpiration !== undefined && Date.now() > userTokenFound.tokenExpiration) {
      return res.status(400).json({ message: "Link has expired" });
    }
    return res.status(200).json({message: "proceed to reset password"})

  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password } = req.body;
    const { error } = validateUserPasswordDetails(req.body);
    if(error) return res.status(400).json({ message: error.details[0].message });
  
    const userExists = await User.findOne({resetToken: req.params.token})
    if(!userExists){
      return res.status(404).json({message: "no user with toke found"})
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    userExists.password = hashedPassword;
    await userExists.save()

    return res.status(200).json({message: "Password reset successful"})
  } catch (error) {
    next(error)
  }
}


export const findMe = async (req: any, res: Response, next: NextFunction) => {
  try {
    const user = req.user;
    if(!user) {
      return res.status(200).json({message: "successful", user})
    }
    res.status(200).json({
      message: " success",
      user
    })
    
  } catch (error) {
    next(error)
  }
}
