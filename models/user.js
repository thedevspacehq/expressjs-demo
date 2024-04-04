import db from "../sqlite.js";

// Create User table
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL
  )`);
});

export default {
  createUser: function (username, email, callback) {
    db.run(
      "INSERT INTO User (username, email) VALUES (?, ?)",
      [username, email],
      function (err) {
        if (err) {
          return callback(err);
        }
        callback(null, { id: this.lastID, username, email });
      }
    );
  },
  getUsers: function (callback) {
    db.all("SELECT * FROM User", function (err, rows) {
      if (err) {
        return callback(err);
      }
      callback(null, rows);
    });
  },
};
