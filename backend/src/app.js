const express = require('express');
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const usersRouter = require("./routes/users");
const flightsRouter = require("./routes/flights");

// settings
app.set("port", process.env.PORT || 8000);

// middlewares
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

// routes
app.use('/api/users', usersRouter);
app.use('/api/flights', flightsRouter);

// server static assets if in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('frontend/build'));
    // Redirect to build folder
    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });

}

module.exports = app;
