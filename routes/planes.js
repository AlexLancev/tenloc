const express = require("express");
const { getPlanes, getPlane, getBlog, getBlogArticle } = require("../controllers/planes");
const router = express.Router();

const path = require('path');

router.get("/tours", getPlanes);

router.get("/blog", getBlog);

router.get("/tours/:id", getPlane);

router.get("/blog/:id", getBlogArticle);

module.exports = router;