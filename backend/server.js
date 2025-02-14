const express = require('express');
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors({
  origin: "http://localhost:5173", // Allow requests from frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

//MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "VitalityChurch",
  port: process.env.DB_PORT || 3307,
});

//Connect to MySQL
db.connect((err) =>{
  if(err){
    console.error("Error connecting to MySQL: ", err);
    return;
  }
  console.log("Connected to MySQL database");
});

//Sample Route
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if(err) return res.status(500).json({error: err.message});
    res.json(results);
  });
});


app.post("/submit", (req, res) => {
  const { firstName, lastName, email, checkBox } = req.body;
  const sql = "INSERT INTO users (firstName, lastName, email, checkBox) VALUES (?, ?, ?, ?)";

  db.query(sql, [firstName, lastName, email, checkBox], (err, result) => {
    if(err){
      console.log("Error inserting data: ", err);
    } else {
      console.log("Data inserted successfully: ", result);
    }
  });
});

//Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));



/*
//Post request to create a new user
app.post("/api/users", (req, res) => {
  const {firstName, lastName, email, textarea, checkBox} = req.body;

  if(!firstName || !lastName || !email) {
    return res.status(400).json({message: "Missing info is required"});
  }

  const newUser = {id : users.length + 1, name: firstName + " " + lastName, email: email, textarea: textarea, chechBox: checkBox};
  users.push(newUser);

    res.status(201).json(newUser);
  });

//Get request to get all users
app.get("/api/users", (req, res) => {
  res.json(users);
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
*/