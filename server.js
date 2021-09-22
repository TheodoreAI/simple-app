// Begin with the imported modules needed; express to build the server; ejs to make the templates
// Need a port, and then need to set up the path to the assets (where the static files will be).
const express = require("express");
const ejs = require("ejs");
const path = require("path");
const port = process.env.PORT || '3000';
const admin = require("./admin");

// app configuration
const app = express();
app.use(express.static(path.join(__dirname, "assets")));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));


/**
 * USE USER ADMIN ROUTES HERE
 */

 app.use("/admin", admin);


/**
 * GET ROUTES
 */
app.get("/", (req, res )=>{
    res.render("index");
})
app.get("/admin", (req, res)=>{
    res.render("adminLogin");
})


/**
 * POST ROUTES
 */



/**
 * Server Activation
 */


module.exports = {
    app,
}
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});