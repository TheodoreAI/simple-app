const express = require("express");
const admin = express.Router();



// Your routes will be added at the end of this: localhost:3000/admin
// To access profile the user needs to be logged in!
// Use {passport, bcrypt, dotenv, passport-local, express-session} dependencies to get the user authentication working.
// 

/**
 * Add the id at the end of the path so as to make it using the id of the user (
 * TODO:
 * getid from the database
 * Make sure that this path is only available if the user is logged in using their id.
 * 
 * 
 */
admin.get("/dashboard", (req, res)=>{
    console.log("does it get here?")
    res.render("dashboard")});

admin.get("/profile", (req, res)=>{
    res.render("profile");
});




/** 
 * TO UPLOAD: use the multer dependency. This will
 * help to upload the files you will need.
 * TODO: 
 * 1. Need to fix the uploading mechanism so that I know 
 *      I can get the files back and display them on HTML.
 * 2. I need to add the profile object that displays the 
 *      admin profile with their newly uploaded image.
 * 3. 
 */
const multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'files');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
const upload = multer({dest: storage});
const id = 1;


// TODO: 1. Find the error on the uploading function and make sure it uploads to (directory: files)
admin.post("/post-picture", upload.single('profile-image'), (req, res, next)=>{
    const {text} = req.body;
    const response = [];
    const profileImg = req.file.filename;
    if (!profileImg){
        const error = new Error("Please upload file!");
        error.httpStatusCode = 400;
        return next(error);
    }else if (profileImg){
        console.log("it gets here", text, profileImg);
        response.push({message_success: "It works"});
        res.send(profileImg);
    }
    res.render("profile");
    
   
   
})


module.exports = admin


