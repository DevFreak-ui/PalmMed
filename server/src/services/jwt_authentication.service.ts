import jwt from "jsonwebtoken";
import config from "../config";

const { JWT_SECRET, JWT_REFRESH_SECRET, SESSION_EXPIRATION } = config;

async function generateToken({ data }: { data: any }) {
  // eslint-disable-next-line no-useless-catch
  try {
    delete data.password;
    // delete data.id;
    delete data.status;
    // delete data.exp;
    delete data.identification;
    // delete data.createdAt;
    // delete data.updatedAt;
    // delete data.;

    const token = jwt.sign(data, JWT_SECRET, {
      expiresIn: SESSION_EXPIRATION.access,
    });
    const refresh = jwt.sign(data, JWT_REFRESH_SECRET, {
      expiresIn: SESSION_EXPIRATION.refresh,
    });

    return { data, token, refresh };
  } catch (e) {
    throw e;
  }
}

async function verifyToken(data: string) {
  try {
    return jwt.verify(data, JWT_SECRET);
  } catch (e) {
    throw e;
  }
}

async function refreshToken(token: string) {
  try {
    const user: any = jwt.verify(token, JWT_REFRESH_SECRET);
    delete user.iat;
    delete user.exp;

    const accesstoken = jwt.sign(user, JWT_SECRET, {
      expiresIn: SESSION_EXPIRATION.access,
    });
    const refreshtoken = jwt.sign(user, JWT_REFRESH_SECRET, {
      expiresIn: SESSION_EXPIRATION.refresh,
    });

    return { data: user, token: accesstoken, refresh: refreshtoken };
  } catch (e) {
    console.error("Refresh check: ", e);
    return null;
  }
}

export { generateToken, refreshToken, verifyToken };
