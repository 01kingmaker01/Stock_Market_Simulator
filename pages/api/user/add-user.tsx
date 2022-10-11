import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import nookies from "nookies";
import User from "../../../models/User";
import Wrapper from "assets/utils/Wrapper";
import type { NextApiRequest, NextApiResponse } from "next";

const secret = "SECRET";
//Sign up handler.
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, username, password, name } = req.body;
    console.log(email);
    //Connectiong to the mongodb collections.

    await Wrapper(async () => {
      //check if the user is present or not.
      const isUserEmail = await User.find({
        email,
      });

      const isUserUserName = await User.find({
        username,
      });

      if (isUserEmail.length > 0) {
        throw new Error("User Email exits!");
      }

      if (isUserUserName.length > 0) {
        throw new Error("Username already exists!");
      }

      //Hashing the password.
      const bycrptedPassword = await bcrypt.hash(password, 10);
      //Creating a new user.
      const user = await User.create({
        email,
        name,
        password: bycrptedPassword,
        username,
      });

      //creating the jwt token and storing it in cookies.
      const token = jwt.sign({ userId: user._id }, secret, {
        expiresIn: "7d",
      });

      //setting the cookies.
      nookies.set({ res }, "token", token, {
        httpOnly: true,
        domain: process.env.SERVER_DOMAIN || undefined,
        maxAge: 60 * 60 * 24 * 7,
        sameSite: true,
        path: "/",
      });

      //sending the response.
      return res.status(200).send({
        message: "User created",
      });
    });
  } catch (error) {
    console.error(error);
  }
};

export default handler;
