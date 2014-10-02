/*******************************************************************************
 * AppFactory.js
 * 
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 * 
 * Crafted at FlightSafety International®.
 */

/**
 * @namespace The app factory, gathering method(s) in order to generate
 * apps in many ways.
 *
 * @public
 */
var AppFactory = {};

/**
 * Loads an app.
 * 
 * @param  {string} dirname The folder where the app is located
 * @return {Object.<string, mixed>} Content of the application
 */
AppFactory.loadFolder = function(dirname) {
  var app = container.get('express'),
      express = require('express')
      ;

  // Configure public directory
  app.use(express.static(dirname + "/public"));

  return {
    config: (function(){
      // Require all configuration in folder /config ...
      var config;
      
      config = requireAll(dirname + "/config", {
        filter: /(.+)\.(?:js|coffee)?$/
      });
      
      return config;
    }()),
    models: (function(){
      // Require all models in folder /models ...
      var models;
      
      models = requireAll(dirname + "/models", {
        filter: /(.+)\.(?:js|coffee)?$/
      });

      // Call `associate` method on each model
      Object.keys(models).forEach(function(modelName) {
        // .. if exists
        if ('associate' in models[modelName]) {
          models[modelName].associate(models)
        }
      })
      
      return models;
    }()),
    controllers: (function(){
      // And require all controllers in folder /controllers.
      var ctrls;
      
      ctrls = requireAll(dirname + "/controllers", {
        filter: /(.+)\.(?:js|coffee)?$/
      });
      
      return ctrls;
    }()),
  };
};

/**
 * @private
 */
function requireAll () {
  try {
    return require('require-all').apply(this, arguments);
  } catch(e) {
    if(e.code != 'ENOENT')
      throw e;
  }
};

module.exports = AppFactory;