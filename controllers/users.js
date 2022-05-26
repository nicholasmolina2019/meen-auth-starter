const bcrypt = require('bcrypt');
const express = require('express');
const res = require('express/lib/response');
const userRouter = express.Router();
const User = require('../models/user.js');

//new (registration page)


//create (registration router)

    userRouter.post('/', (req, res) => {
    //overwrite the user password with hashed password, then pass to database
    req.body.passowrd = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    res.send(req.body);
}) 


//export user router
module.exports = userRouter;