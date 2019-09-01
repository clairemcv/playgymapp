~"use strict";

const express = require("express");
const router = express.Router();

const accounts = require("./controllers/accounts.js");
const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");
const assessment = require("./controllers/assessment.js");

router.get("/", accounts.index);
router.get("/login", accounts.login);
router.get("/signup", accounts.signup);
router.get("/logout", accounts.logout);
router.post("/register", accounts.register);
router.post("/authenticate", accounts.authenticate);
router.post("/updateuser", accounts.updateUser);



router.get("/dashboard", dashboard.index);
router.get("/dashboard/deleteassessment/:id", dashboard.deleteAssessment);
router.post("/dashboard/addassessment", dashboard.addAssessment);



router.get("/about", about.index);
router.get("/assessment/:id", assessment.index);
router.post("/assessment/:id/addcomment", assessment.addComment);

module.exports = router;
