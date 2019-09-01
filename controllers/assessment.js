"use strict";

const logger = require("../utils/logger");
const assessmentList = require("../models/assessment-list");
const uuid = require("uuid");

const assessment = {
    index(request, response) {
        const assessmentId = request.params.id;
        logger.debug("Assesssment id = ", assessmentId);
        const viewData = {
            title: "Assessment",
            assessment: assessmentList.getAssessment(assessmentId)
        };
        response.render("assessment", viewData);
    },

    addComment(request, response) {
        const assessmentId = request.params.id;
        const assessment= assessmentList.getAssessment(assessmentId);
        const loggedInUser = accounts.getCurrentUser(request);
        const newComment = {
            userid: loggedInUser.id,
            comment: request.body.comment,
        };
        logger.debug("New Comment = ", newComment);
        assessmentList.addComment(assessmentId, newComment);
        response.redirect("/assessment");
    }

};

module.exports = assessment;
