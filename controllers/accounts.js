"use strict";

const userstore = require("../models/user-store");
const logger = require("../utils/logger");
const uuid = require("uuid");

const accounts = {
    index(request, response) {
        const viewData = {
            title: "Login or Signup"
        };
        response.render("index", viewData);
    },

    login(request, response) {
        const viewData = {
            title: "Login to the Service"
        };
        response.render("login", viewData);
    },

    logout(request, response) {
        response.cookie("assessment", "");
        response.redirect("/");
    },

    signup(request, response) {
        const viewData = {
            title: "Login to the Service"
        };
        response.render("signup", viewData);
    },

    register(request, response) {
        const user = request.body;
        user.id = uuid();
        userstore.addUser(user);
        logger.info(`registering ${user.email}`);
        response.redirect("/");
    },

    authenticate(request, response) {
        const user = userstore.getUserByEmail(request.body.email);
        if (user) {
            response.cookie("assessment", user.email);
            logger.info(`logging in ${user.email}`);
            response.redirect("/dashboard");
        } else {
            response.redirect("/login");
        }
    },

    getCurrentUser(request) {
        const userEmail = request.cookies.assessment;
        return userstore.getUserByEmail(userEmail);
    },

    updateUser(request) {
        const loggedInUser = accounts.getCurrentUser(request);
        loggedInUser.firstname = request.body.firstname;
        loggedInUser.lastname = request.body.lastname;
        loggedInUser.height = Number(request.body.height);
        loggedInUser.startingWeight = Number(request.body.startingweight);
        this.store.save();
        },

};

module.exports = accounts;
