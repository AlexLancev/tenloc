const express = require("express");
const { getPlanes, getPlane } = require("../controllers/planes");
const router = express.Router();

const path = require('path');

// @route GET /api/planes
// @desc Получить все самолёты
router.get("/", getPlanes);

// @route GET /api/planes/:id
// @desc Получить самолёт по id
router.get("/:id", getPlane);

module.exports = router;