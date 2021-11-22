const express = require('express');
const cors = require("cors");
const app = express();

const usersRouter = require("./routes/users");
const flightsRouter = require("./routes/flights");

// settings
app.set("port", process.env.PORT || 8000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/users', usersRouter);
app.use('/api/flights', flightsRouter);

module.exports = app;
