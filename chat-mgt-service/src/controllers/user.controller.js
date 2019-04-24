import UserModel from "../models/user.model";

class UserController {
  static async get(req, res) {
    try {
      const users = await UserModel.get();
      return res.status(200).json(users);
    } catch (e) {
      console.error(e);
      res.status(500).json("Internal server error");
    }
  }
}

export default UserController;
