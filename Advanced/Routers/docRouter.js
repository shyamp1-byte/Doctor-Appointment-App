const express = require('express');
const router = new express.Router();
const docController = require("../Controllers/docController")

router.route('/')
.post(docController.createNewDoctor)
.get(docController.getAllDoctors);

module.exports = router;