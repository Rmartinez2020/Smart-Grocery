const router = require("express").Router();
const path = require("path");
const auth = require("../middleware/auth");
const db = require("../models");


// user authorized views
// get all the users grocerylists
router.get("/", auth, (req, res) => {
    db.Grocery.findAll({
        // only for current user
        where:{
            UserId: req.session.passport.user
        }
    }).then(data => {
        const Groceries = { lists:data}
        //reder the lists on the page
        res.render("dashboard", Groceries)
    })
});
router.get("/add-recipe", auth, (req, res) => res.render("add-recipe"));
router.get("/user/profile", auth, (req, res) => res.render("profile"));
router.get("/search", auth, (req, res) => res.render("search"));
// router.get("/google", auth, (req, res) => res.render("google"));

router.get("/google", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/google.html")));
router.get("/grocery-list", auth, (req, res) => res.render("grocery-list"));

// login and register forms view
router.get("/user/login", (req, res) => res.sendFile(path.join(__dirname, "../public/login.html")));
router.get("/user/register", (req, res) => res.sendFile(path.join(__dirname, "../public/register.html")));

module.exports = router;