const express = require("express");
const { addArt } = require("../controllers/artControllers");

const router = express.Router();

router.post("/" , addArt);

module.exports = router;