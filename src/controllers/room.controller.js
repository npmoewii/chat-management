import RoomModel from "../models/room.model";

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
}

export default RoomController;
