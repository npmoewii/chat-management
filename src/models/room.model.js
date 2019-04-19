import conn from "../database";

class Room {
  /**
   * @returns {Array} Existing rooms
   */
  async get() {
    let rooms = null;
    try {
      const [rows] = await conn.execute("SELECT * FROM `room`");
      rooms = [];
      rows.forEach(row => rooms.push(row.roomId));
    } catch (e) {
      console.error(e);
    } finally {
      return rooms;
    }
  }

  /**
   *
   * @param {string} roomId
   * @return {Array} Return array of user in the roomId, if no roomId return null
   */
  async getMember(roomId) {
    let members = null;
    try {
      const room = await this.find(roomId);
      if (room) {
        const [rows] = await conn.execute(
          "SELECT * FROM `room_member` WHERE `roomId` = ?",
          [roomId]
        );
        members = [];
        if (rows.length > 0) {
          rows.forEach(row => members.push(row["username"]));
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      return members;
    }
  }

  /**
   *
   * @param {string} roomId
   * @returns {?object} Return row of found room if roomId exist, else return null
   */
  async find(roomId) {
    let foundRoom = null;
    try {
      const [rows] = await conn.execute(
        "SELECT * FROM `room` WHERE `roomId`=?",
        [roomId]
      );
      foundRoom = rows[0];
    } catch (e) {
      console.error(e);
    } finally {
      return foundRoom;
    }
  }

  /**
   * @param {string} roomId New room id
   * @returns {?object} Return row of found room if roomId exist, else return null
   */
  async create(roomId) {
    let room = null;
    try {
      await conn.execute("INSERT INTO `room`(`roomId`) VALUES (?)", [roomId]);
      room = await this.find(roomId);
    } catch (e) {
      console.error(e);
    } finally {
      return room;
    }
  }

  /**
   *
   * @param {string} roomId
   * @return {boolean} Return true if the room is deleted, else return false
   */
  async delete(roomId) {
    try {
      const [result] = await conn.execute("DELETE FROM `room` WHERE roomId=?", [
        roomId
      ]);
      return result["affectedRows"] > 0;
    } catch (e) {
      console.error(e);
    }
    return false;
  }
}

const RoomModel = new Room();
export default RoomModel;
