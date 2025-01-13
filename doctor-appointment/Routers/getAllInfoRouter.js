const express = require('express');
const router = new express.Router();
const getAllInfoController = require("./../Controllers/getAllInfoController")
const auth=require("../Middleware/auth");



/**
   * @swagger
   * '/getallinfo':
   *  get:
   *     tags:
   *     - ALL-Info
   *     summary: Geting all information to know the user/doctor count
   *     responses:
   *       200:
   *         description: Success
*/


router.route('/')
.get(getAllInfoController.getAllInfo);

module.exports = router;