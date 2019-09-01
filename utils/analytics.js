
"use strict";

const userstore = require("../models/user-store");
const assessmentList = require("../models/assessment-list");
const logger = require("../utils/logger");
const uuid = require("uuid");


    calculateBMI(currentUser.height, currentUser.weight){
    const loggedInUser = accounts.getCurrentUser(request);

    let bmi = 0;
    if (currentUser.height > 0 && currentUser.weight > 0) {
        bmi = Math.round((weight / Math.pow(height / 100, 2)) * 10) / 10;
    }
    return calculateBMI();


}

module.exports = analytics;