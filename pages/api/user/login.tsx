import Wrapper from "@assets/utils/Wrapper";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import nookies from "nookies";
import User from "../../../models/User";
import type { NextApiRequest, NextApiResponse } from "next";

const jwtSceret = "SECRET";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { username, password } = req.body;

    console.log({ username, password });

    //check if the user exits.
    await Wrapper(async () => {
      const isUser = await User.find({
        $or: [{ email: username }, { username }],
      });

      if (isUser.length == 0) {
        throw new Error("No User Found!");
      }

      //bcrypt the password.
      const validPassword = await bcrypt.compare(password, isUser[0].password);

      if (!validPassword) {
        throw new Error("Password is incorrect!");
      }

      // creating the jwt token and storing it in cookies.
      const token = jwt.sign({ userId: isUser[0]._id }, jwtSceret, {
        expiresIn: "7d",
      });

      // Setting the cookies.
      nookies.set({ res }, "token", token, {
        httpOnly: true,
        domain: process.env.SERVER_DOMAIN || undefined,
        maxAge: 60 * 60 * 24 * 7,
        sameSite: true,
        path: "/dashboard",
      });

      return res.status(200).send({
        message: "done",
      });
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};

export default handler;
