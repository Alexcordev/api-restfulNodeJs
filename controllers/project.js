'use strict'

var Project = require('../models/project');

var controller = {

saveProject: function(req, res) {
    var project = new Project();

    var params = req.body;
    project.name = params.name;
    project.address = params.address;


}








};

module.exports = controller;

