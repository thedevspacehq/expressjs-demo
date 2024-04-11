import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.sqlite");

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        content TEXT
      )`
  );
});

export default class Post {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }

  // Fetch all posts from the database
  static getAll(callback) {
    const sql = "SELECT * FROM posts";
    db.all(sql, (err, rows) => {
      const posts = rows.map((row) => new Post(row.id, row.title, row.content));
      callback(null, posts);
    });
  }

  // Fetch a post by ID from the database
  static getById(id, callback) {
    const sql = "SELECT * FROM posts WHERE id = ?";
    console.log(id);
    db.get(sql, [id], (err, row) => {
      const post = new Post(row.id, row.title, row.content);
      callback(null, post);
    });
  }

  // Insert a new post into the database
  static create(title, content, callback) {
    const sql = "INSERT INTO posts (title, content) VALUES (?, ?)";
    db.run(sql, [title, content], (err) => {
      callback(null, this.lastID);
    });
  }

  // Update an existing post in the database
  static update(id, title, content, callback) {
    const sql = "UPDATE posts SET title = ?, content = ? WHERE id = ?";
    db.run(sql, [title, content, id], function (err) {
      callback(null);
    });
  }

  // Delete a post from the database
  static delete(id, callback) {
    const sql = "DELETE FROM posts WHERE id = ?";
    db.run(sql, [id], function (err) {
      callback(null);
    });
  }
}
