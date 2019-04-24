import RoomModel from "../models/room.model";
import UserModel from "../models/user.model";

class RoomController {
  static async get(req, res) {
    try {
      const { roomId } = req.params;
      const members = await RoomModel.getMember(roomId);
      if (members) {
        return res.status(200).json(members);
      }
      res.status(404).json("Room does not exists");
    } catch (e) {
      console.error(e);
      res.status(500).json("Internal server error");
    }
  }

  static async put(req, res) {
    try {
      const { roomId } = req.params;
      const username = req.body.user;
      let user = await UserModel.find(username);
      if (!user) user = await UserModel.create(username);
      let room = await RoomModel.find(roomId);
      if (!room) room = await RoomModel.create(roomId);
      const isJoin = await RoomModel.join(roomId, username);
      if (isJoin) {
        return res.status(201).json({});
      }
      res.status(200).json({});
    } catch (e) {
      console.error(e);
      res.status(500).json("Internal server error");
    }
  }

  static async delete(req, res) {
    try {
      const { roomId } = req.params;
      const username = req.body.user;
      const isLeave = await RoomModel.leaveRoom(roomId, username);
      if (isLeave) {
        return res.status(200).json(`${username} leaves the room`);
      }
      res.status(404).json(`User id is not found`);
    } catch (e) {
      console.error(e);
      res.status(500).json("Internal server error");
    }
  }
}

export default RoomController;
