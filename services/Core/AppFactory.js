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
  return {
    controllers: (function(){
      // Require all controllers in folder /controllers
      var ctrls;
      
      ctrls = requireAll(__dirname + "/controllers", {
        filter: /(.+)\.(?:js|coffee)?$/
      });
      
      return ctrls;
    }()),
    models: (function(){
      // Require all controllers in folder /controllers
      var models;
      
      models = requireAll(__dirname + "/models", {
        filter: /(.+)\.(?:js|coffee)?$/
      });
      
      return models;
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