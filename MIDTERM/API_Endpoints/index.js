const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname));

let users = [
  { id: 1, name: "Carmela", email: "mela@gmail.com", age: 25, salary: 25000 },
  { id: 2, name: "Joseph", email: "joe@yahoo.com", age: 30, salary: 45000 },
  { id: 3, name: "James", email: "james@msn.com", age: 35, salary: 30000 },
  { id: 4, name: "John", email: "john@gmail.com", age: 40, salary: 25000 },
  { id: 5, name: "Frank", email: "frank@yahoo.com", age: 45, salary: 45000 },
  { id: 6, name: "Alex", email: "alex@msn.com", age: 21, salary: 33000 }
];

// Root route
app.get("/", (req, res) => {
  res.send({
    message: "Available routes:",
    routes: [
      "/api/users",
      "/api/users/:id",
      "/api/users?name=",
      "POST /api/users",
      "DELETE /api/delete/:id"
    ]
  });
});

// Get Users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Get Users by ID
app.get("/api/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

// Add a new User
app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    salary: req.body.salary
  };
  users.push(newUser);
  res.json(newUser);
});

// Delete a User by ID
app.delete("/api/delete/:id", (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.send("User deleted");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
