var express = require('express');
module.exports = function (config, app) {
  /* Default Route */
  app.get('/', function (req, res) {
    res.render('index', { title: 'Home', message: 'Welcome'});
  });

  app.use("/admin",require("./AdminController"));
  app.use("/gallery",require("./GalleryController"));
  app.use("/posts",require("./PostsController"));
};