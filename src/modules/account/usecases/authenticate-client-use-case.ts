import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prisma-client";

export class AuthenticateClientUseCase {
  async execute({ username, password }: AuthenticateClientUseCase.Request) {
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    });

    if (!client) {
      throw new Error("Username or password invalid");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid");
    }

    const token = sign({ username }, process.env.CLIENT_SECRET!, {
      subject: client.id,
      expiresIn: "1d"
    });

    return token;
  }
}

export namespace AuthenticateClientUseCase {
  export interface Request {
    username: string;
    password: string;
  }
}
