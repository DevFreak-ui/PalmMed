import mongoose, { Document } from "mongoose";
import Joi, { ValidationResult } from "joi";
import { User as UserInterface } from "../types";
import crypto from "crypto";
interface UserDocument extends UserInterface, Document {
  generateResetToken: () => void;
}

const userSchema = new mongoose.Schema<UserDocument>({
  firstname: {
    type: String,
    minlength: 3,
    maxlength: 256,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    minlength: 3,
    maxlength: 256,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    minlength: 3,
    maxlength: 256,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    minlength: 3,
    maxlength: 1024,
  },
  password: {
    type: String,
    minlength: 3,
    maxlength: 1024,
    required: true,
  },

  resetToken: {
    type: String,
    minlength: 3,
    maxlength: 1024,
    required: false,
  },

  tokenExpiration: {
    type: Number,
    required: false,
  },
});

export const User = mongoose.model<UserDocument>("User", userSchema);

export const validateUserRegistration = (
  user: UserInterface
): ValidationResult => {
  const schema = Joi.object({
    firstname: Joi.string().min(3).max(256).required(),
    lastname: Joi.string().min(3).max(256).required(),
    email: Joi.string().email().max(256).required(),
    imageUrl: Joi.string().max(1024),
    password: Joi.string().min(7).max(256).required(),
  });

  return schema.validate(user);
};

export const validateUserLogin = (credentials: {
  email: string;
  password: string;
}): ValidationResult => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(7).max(256).required(),
  });

  return schema.validate(credentials);
};

export const validateUserPasswordReset = (info: {
  email: string;
}): ValidationResult => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
  });

  return schema.validate(info);
};

export const validateUserPasswordDetails = (passDetails: {
  password: string;
}): ValidationResult => {
  const schema = Joi.object({
    password: Joi.string().min(7).max(256).required(),
  });

  return schema.validate(passDetails);
};
