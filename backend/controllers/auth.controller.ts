import express, { Request, Response } from "express";
import { User } from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
      const { email, password } = req.body;

      const ifExist = await User.findOne({ where: { email } }); //check the user available in the database

      if (!ifExist) {
        return res
          .status(401)
          .json({ message: "Invaild user name or password" });
      }

      const isValidPassword = await bcrypt.compare(password, ifExist.password); //compare the password available in the database
      if (!isValidPassword) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      //? User Authentication
      const token = jwt.sign(
        { userId: ifExist.id, email: ifExist.email },
        "Secret-Key",
        { expiresIn: "1h" }
      );
      res.status(200).json({ token });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Server Error" });
    }
  },
};

export default userController;
