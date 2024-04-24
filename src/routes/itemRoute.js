const express = require("express");

const router = express.Router();

const { addData } = require("../controllers/itemController");

router.post("/item", addData);

module.exports = router;
