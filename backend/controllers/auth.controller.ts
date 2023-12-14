import express, { Request, Response } from "express";
import { User } from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userController = {
  //! To register a new user.
  async registerUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      const token = jwt.sign(
        { userId: user.id, email: user.email },
        "Secret-Key", // Replace with your secret key
        { expiresIn: "1h" }
      );

      res.status(200).json({ token });
    } catch (error) {
      console.error("Error registering user:", error);
      return res.status(500).json({ error: "Failed to register user" });
    }
  },

  //! To login a new user
  async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;

    const userAvaialble = await User.findOne({ where: { email: email } });
    if (!userAvaialble)
      return res.status(400).json({ message: "The user does not exist" });

    const isPasswordMatch = bcrypt.compare(password, userAvaialble.password);
    if (!isPasswordMatch)
      return res.status(400).json({ message: "The password does not match" });

    return res.status(200).json({ message: "User logged in sucessfully" });
  },
};

export default userController;
