const express = require('express');
const router = new express.Router();
const getAllInfoController = require("./../Controllers/getAllInfoController")
const auth=require("../Middleware/auth");

router.route('/')
.get(auth.verifyToken, getAllInfoController.getAllInfo);

module.exports = router;