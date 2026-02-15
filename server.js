const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/User");

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect(
    "mongodb+srv://coverdalesteven_db_user:D49TW4oWO8piH6JB@cluster0.wtu8huk.mongodb.net/lab4_users_database?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// POST API to insert user
app.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.listen(8081, () => {
    console.log("Server running on http://localhost:8081");
});