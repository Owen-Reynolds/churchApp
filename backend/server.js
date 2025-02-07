const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let users = [];

//Post request to create a new user
app.post("/api/users", (req, res) => {
  const {firstName, lastName, email, textarea} = req.body;

  if(!firstName || !lastName || !email) {
    return res.status(400).json({message: "Missing info is required"});
  }

  const newUser = {id : users.length + 1, name: firstName + " " + lastName, email: email, textarea: textarea};
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