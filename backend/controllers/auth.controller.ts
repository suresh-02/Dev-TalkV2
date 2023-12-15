import express, { Request, Response } from "express";
import { User } from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authController = {
  //! To register a new user.
  async registerUser(req: Request, res: Response) {
    try {
      const { username, password, email, image } = req.body; //? getting the  user entering details
      const hashedPassword = await bcrypt.hash(password, 10); //?saved as the hashed password

      // Check if the user already exists
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res
          .status(400)
          .json({ error: "User already exists in database" });
      }

      // Create a new user
      const newUser = await User.create({
        username: username,
        password: hashedPassword,
        email: email,
        image: password,
      });

      return res.status(201).json(newUser);
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

    const isPasswordMatch = await bcrypt.compare(
      password,
      userAvaialble.password
    );
    if (!isPasswordMatch)
      return res.status(400).json({ message: "The password does not match" });

    return res.status(200).json({ message: "User logged in sucessfully" });
  },
};

export default authController;
