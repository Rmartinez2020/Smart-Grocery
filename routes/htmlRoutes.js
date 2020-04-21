const router = require("express").Router();
const path = require("path");
const auth = require("../middleware/auth");


// user authorized views
router.get("/", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/dashboard.html")));
router.get("/user/page2", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/page2.html")));
router.get("/user/profile", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/profile.html")));
router.get("/user/search", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/search.html")));
router.get("/user/google", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/google.html")));

// login and register forms view
router.get("/user/login", (req, res) => res.sendFile(path.join(__dirname, "../public/login.html")));
router.get("/user/register", (req, res) => res.sendFile(path.join(__dirname, "../public/register.html")));

module.exports = router;