/*******************************************************************************
 * Kernel.js
 * 
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 * 
 * Crafted at FlightSafety International®.
 */

var util = require("util"),
    ServiceContainerAware = require('./ServiceContainerAware'),
    _ = require('lodash');

/**
 * The kernel of our server, il will initialize each components of the webserver.
 * 
 * @param {AppManager} The application manager.
 * 
 * @constructor
 */
function Kernel () {
}

util.inherits(Kernel, ServiceContainerAware);

/**
 * Launches the webserver, and all the rest
 */
Kernel.prototype.load = function() {
  this.server = this.container.get('express');
  this.router = this.container.get('router');
  _.assign(global, this.router);
  
  this.appManager = this.container.get('appmgr');
  
  log.debug("Kernel loaded");
};

module.exports = Kernel;