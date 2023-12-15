import { User } from "../models";

const userController = {
  async getAll(req: Request, res: Response) {
    const users = [];

    users.push(User.findAll());

    console.log(users);
  },
};

export default userController;
