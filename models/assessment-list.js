"use strict";

const _ = require("lodash");
const JsonStore = require("./json-store");

const assessmentList = {
    store: new JsonStore("./models/assessment-list.json", {
        assessmentList: []
    }),
    collection: "assessmentList",

    getAllAssessments() {
        return this.store.findAll(this.collection);
    },

    getAssessment(id) {
        return this.store.findOneBy(this.collection, { id: id });
    },

    getUserAssessment(userid) {
        return this.store.findBy(this.collection, { userid: userid });
    },

    addAssessment(assessment) {
        this.store.add(this.collection, assessment);
        this.store.save();
    },


    removeAssessment(id) {
        const assessment = this.getAssessment(id);
        this.store.remove(this.collection, assessment);
        this.store.save();
    },

    removeAllAssessments() {
        this.store.removeAll(this.collection);
        this.store.save();
    },

    addComment(comment) {
       // assessmentList.comment = comment;
        this.store.add(this.collection, comment);
        this.store.save();
    }

};

module.exports = assessmentList;