"use server";

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const port = process.env.PORT;
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error(err));

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello backend, you bitch.'});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})