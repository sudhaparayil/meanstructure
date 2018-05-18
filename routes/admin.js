const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
// const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require('../config/database');
const User = require("../model/user");

async = require("async");
'use strict';
var returnRouter = function (io) {
 router.post('/adduser', function (req, res) {
console.log("SD")
    var newUser = new User();
    newUser.name = "name1";
    newUser.password = "asd1123";
    newUser.email = "asd1@gmail.com";
    newUser.save(function (err, inserted) {
        if (err) {
            console.log("Error " + err);
        } else {
            isSuccess = true
            errMsg = 'Saved successfully';
            return res.json(inserted);
        }

    });
 });

 router.get('/alluser', (req, res, next) => {
    User.find({}).exec(function (err, user) {
        if (err) throw err;
        return res.json(user);
    })

});

router.get('/oneuser', (req, res, next) => {
    User.findById({"_id": "5afbb89f81aaee3de861c57b"}).exec(function (err, user) {
        if (err) throw err;
        return res.json(user);
    })

});

router.delete('/removeuser', (req, res, next) => {
    User.findByIdAndRemove({"_id": "5afbb89f81aaee3de861c57b"}).exec(function (err, user) {
        if (err) throw err;
        console.log("removeuser");
    })

});
router.put('/updateuser', (req, res, next) => {
    User.findByIdAndUpdate("5afbb89f81aaee3de861c57b",
        {
            $set: { name: "sudhap" }

        },
        {
            new: true
        },
        function (err, updateduser) {
        if (err) throw err;
        return res.json(updateduser);
    })

});

module.exports = router;
return router;
}

module.exports = returnRouter;