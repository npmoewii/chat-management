import conn from "../database";

class User {
  /**
   * @returns {Array} List of all users
   */
  async get() {
    let users = [];
    try {
      const [rows] = await conn.execute("SELECT * FROM `user`");
      rows.forEach(row => users.push(row["username"]));
    } catch (e) {
      console.error(e);
    } finally {
      return users;
    }
  }
}

const UserModel = new User();
export default UserModel;
