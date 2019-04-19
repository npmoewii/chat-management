import RoomModel from "../models/room.model";

class AllroomsController {
  static async get(req, res) {
    try {
      const rooms = await RoomModel.get();
      return res.status(200).json(rooms);
    } catch (e) {
      console.error(e);
      res.status(500).json("Internal server error");
    }
  }

  static async post(req, res) {
    try {
      const room = await RoomModel.create(req.body.id);
      if (room) {
        return res.status(201).json({ id: room["roomId"] });
      }
      return res.status(404).json(`${req.body.id} already exists`);
    } catch (e) {
      console.error(e);
      res.status(500).json("Internal server error");
    }
  }

  static async put(req, res) {
    try {
      const roomId = req.body.id;
      const room = await RoomModel.find(roomId);
      if (!room) {
        const newRoom = await RoomModel.create(roomId);
        return res.status(201).json({ id: newRoom["roomId"] });
      }
      return res.status(200).json({ id: room["roomId"] });
    } catch (e) {
      console.error(e);
      res.status(500).json("Internal server error");
    }
  }

  static async delete(req, res) {
    try {
      const roomId = req.body.id;
      const result = await RoomModel.delete(roomId);
      if (result) {
        return res.status(200).json(`${roomId} Is deleted`);
      }
      return res.status(404).json("Room id is not found");
    } catch (e) {
      console.error(e);
      res.status(500).json("Internal server error");
    }
  }
}

// const
export default AllroomsController;
