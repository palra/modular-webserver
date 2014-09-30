/*******************************************************************************
 * ServiceContainerAware.js
 * 
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 * 
 * Crafted at FlightSafety International®.
 */

/**
 * Constructor for a service container aware class
 * 
 * @abstract
 * @constructor
 * @public
 */
function ServiceContainerAware () {
  throw new Error('This is an abstract class : it must not be instanciated.');
}

ServiceContainerAware.prototype.setContainer = function(container) {
  this.container = container;
};

module.exports = ServiceContainerAware;