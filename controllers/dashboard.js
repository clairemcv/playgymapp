"use strict";

const accounts = require("./accounts.js");
const logger = require("../utils/logger");
const assessmentList = require("../models/assessment-list");
const uuid = require("uuid");

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const loggedInUser = accounts.getCurrentUser(request);
    const viewData = {
      title: "Assessment Dashboard",
      assessment: assessmentList.getUserAssessment(loggedInUser.id)
    };
    logger.info("about to render", assessmentList.getAllAssessments());
    response.render("dashboard", viewData);
  },

  deleteAssessment(request, response) {
    const assessmentId = request.params.id;
    logger.debug(`Deleting Assessment ${assessmentId}`);
    assessmentList.removeAssessment(assessmentId);
    response.redirect("/dashboard");
  },

  addAssessment(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newAssessment = {
      id: uuid(),
      userid: loggedInUser.id,
      weight: Number(request.body.weight),
      chest: Number(request.body.chest),
      thigh: Number(request.body.thigh),
      upperarm: Number(request.body.upperarm),
      waist: Number(request.body.waist),
      hips: Number(request.body.hips),

    };

    logger.debug("Creating a new Assessment", newAssessment);
    assessmentList.addAssessment(newAssessment);
    response.redirect("/dashboard");
  },


};

module.exports = dashboard;