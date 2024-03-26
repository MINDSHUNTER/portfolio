const express = require("express");
const session = require('express-session');
const mongoose = require("mongoose");
const mainRouter = require("./routers/mainRouter")
const adminRouter = require("./routers/adminRouter");
const projectRouter = require("./routers/projectRouter");

const app = express()


app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret: 'brainOff',
    resave: true,
    saveUninitialized: true,
}));


app.use(express.static("./assets"))

app.use(projectRouter)

app.use(adminRouter);

app.use(mainRouter);

const port = 3007;
app.listen(port, (err) => {
    console.log(err ? err : `Success! Connected to server on port ${port}`);
});

mongoose.connect("mongodb://localhost:27017/portfolio");

