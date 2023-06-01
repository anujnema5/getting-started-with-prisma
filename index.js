const express = require('express');
const cookieParser = require('cookie-parser');
const userRoutes = require("./routes/userRoutes");
const app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use("/api", userRoutes);

app.get("/", (req, res) => {
    res.json({ name: 'Anuj nema' })
})

app.listen(3000, () => {
    console.log("Server started");
})