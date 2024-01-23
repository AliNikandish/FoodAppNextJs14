import { compare, hash } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

const hashPassword = async (password: any) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const generateToken = (data: any) => {
  const token = sign({ ...data }, "xscscscascacaaa", {
    // algorithm: ''
    expiresIn: "24h",
  });
  return token;
};

const verifyPassword = async (password: string, hashedPassword: string) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

const verifyToken = (token: any) => {
  try {
    const validationResult = verify(token, "xscscscascacaaa");
    return validationResult;
  } catch (error) {
    console.log("Verify Token Error =>", error);
    return false;
  }
};

export { hashPassword, generateToken, verifyPassword, verifyToken };
