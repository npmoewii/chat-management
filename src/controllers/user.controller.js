import UserModel from "../models/user.model";

class UserController {
  static async get(req, res) {
    try {
      const users = await UserModel.get();
      res.status(200).json(users);
    } catch (e) {
      console.error(e);
    }
  }
}

export default UserController;
