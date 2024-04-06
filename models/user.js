import db from "../libs/sqlite.js";

class User {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  static getAll(callback) {
    const sql = "SELECT * FROM users";
    db.all(sql, (err, users) => {
      if (err) {
        callback(err, null);
        return;
      }
      const users = users.map(
        (user) => new User(user.id, user.name, user.description)
      );
      callback(null, users);
    });
  }

  static getById(id, callback) {
    const sql = "SELECT * FROM users WHERE id = ?";
    db.get(sql, [id], (err, user) => {
      if (err) {
        callback(err, null);
        return;
      }
      if (!user) {
        callback({ message: "User not found" }, null);
        return;
      }
      const user = new User(user.id, user.name, user.description);
      callback(null, user);
    });
  }

  static create(name, description, callback) {
    const sql = "INSERT INTO users (name, description) VALUES (?, ?)";
    db.run(sql, [name, description], function (err) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, this.lastID);
    });
  }

  static update(id, name, description, callback) {
    const sql = "UPDATE users SET name = ?, description = ? WHERE id = ?";
    db.run(sql, [name, description, id], function (err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    });
  }

  static delete(id, callback) {
    const sql = "DELETE FROM users WHERE id = ?";
    db.run(sql, [id], function (err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    });
  }
}

export default User;
