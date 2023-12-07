import express, { Request, Response } from "express";
import { User } from "../models/user";

const userController = {
  //! To register a new user.
  async registerUser(req: Request, res: Response) {
    try {
      const { username, password, email, image } = req.body; //? getting the  user entering details

      // Check if the user already exists
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res
          .status(400)
          .json({ error: "User already exists in database" });
      }

      // Create a new user
      const newUser = await User.create({
        username,
        password,
        email,
        image,
      });

      return res.status(201).json(newUser);
    } catch (error) {
      console.error("Error registering user:", error);
      return res.status(500).json({ error: "Failed to register user" });
    }
  },

  //! To login a new user

  async loginUser(req: Request, res: Response) {
    try {
    } catch (errror) {}
  },
};

export default userController;
