const express = require('express');
const router = new express.Router();
const userController = require("./../Controllers/userController")
const auth=require("../Middleware/auth");
const userSchema=require("../Schema/userSchema");


router.route('/')
.post(userController.createNewUser)
.get(auth.verifyToken,userController.getAllUsers);


/**
   * @swagger
   * '/users/{emailID}':
   *  get:
   *     tags:
   *     - Users
   *     summary: Get a user by the emailID
   *     parameters:
   *      - name: emailID
   *        in: path
   *        description: age should be between 18 to 65 max
   *        required: true
   *     responses:
   *       200:
   *         description: {"Success":"dsd"}
*/

router.route('/:email')
.get(userController.getUsersByEmail);

module.exports = router;