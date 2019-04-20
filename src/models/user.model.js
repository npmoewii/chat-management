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

  /**
   *
   * @param {string} username Username to find user
   * @return Return user object: {username}, If no user return null
   */
  async find(username) {
    let user = null;
    try {
      const [row] = await conn.execute(
        "SELECT * FROM `user` WHERE username=? LIMIT 1",
        [username]
      );
      user = row[0];
    } catch (e) {
      console.error(e);
    } finally {
      return user;
    }
  }

  /**
   *
   * @param {string} username
   * @return Return user object if create success, if not return null
   */
  async create(username) {
    let user = null;
    try {
      await conn.execute("INSERT INTO `user`(`username`) VALUES (?)", [
        username
      ]);
      user = await this.find(username);
    } catch (e) {
      console.error(e);
    } finally {
      return user;
    }
  }
}

const UserModel = new User();
export default UserModel;
