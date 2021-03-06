const express = require("express");
const artRouter = require("./routes/artRoutes");

const app = express();
//middleware
app.use(express.json());
//routers
app.use("/api/v1/art" , artRouter)

module.exports = app;