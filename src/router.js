import { Router } from "express";
import AllroomsController from "./controllers/allrooms.controller";
import UserController from "./controllers/user.controller";
import RoomController from "./controllers/room.controller";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Chat Management Server" });
});

// Route: /allrooms
router.get("/allrooms", AllroomsController.get);
router.post("/allrooms", AllroomsController.post);
router.put("/allrooms", AllroomsController.put);
router.delete("/allrooms", AllroomsController.delete);

// Route: /users
router.get("/users", UserController.get);

// Route: /room
router.get("/room/:roomId", RoomController.get);

export default router;
