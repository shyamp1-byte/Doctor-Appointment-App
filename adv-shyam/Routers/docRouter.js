const express = require('express');
const router = new express.Router();
const docController = require("./../Controllers/docController")
const auth = require ("../Middleware/auth")

router.route('/')
.post(auth.verifyToken,docController.createNewDoctor)
.get(docController.getAllDoctors);

module.exports = router;