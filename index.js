const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000;
app.use(cors());
app.use(express.json());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Hello from my own over Smart  Smart Pant");
});

const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com", phone: "0178888888" },
  { id: 2, name: "Shabnoor", email: "Shabnoor@gmail.com", phone: "0178888888" },
  { id: 3, name: "Suchrita", email: "Suchrita@gmail.com", phone: "0178888888" },
  { id: 4, name: "Suchonda", email: "Suchonda@gmail.com", phone: "0178888888" },
  { id: 5, name: "Srabonti", email: "Srabonti@gmail.com", phone: "0178888888" },
  { id: 6, name: "Sabila", email: "Sabila@gmail.com", phone: "0178888888" },
  { id: 7, name: "shoana", email: "shoana@gmail.com", phone: "0178888888" },
  { id: 8, name: "sssss", email: "sssss@gmail.com", phone: "0178888888" },
];

app.get("/user", (req, res) => {
  if (req.query.name) {
    const serch = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(serch)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});
app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});
app.listen(port, () => {
  console.log("Listening to port", port);
});
