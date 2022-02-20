import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export const ensureAuthenticateClient = async (request: Request, response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing"
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, process.env.CLIENT_SECRET!) as Payload;

    request.id_client = sub;

    return next();
  } catch (error) {
    return response.status(401).json({
      message: "Invalid token"
    });
  }
};

export interface Payload {
  sub: string;
}
