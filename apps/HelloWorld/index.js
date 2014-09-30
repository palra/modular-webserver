/*******************************************************************************
 * index.js
 * 
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 * 
 * Crafted at FlightSafety International®. 
 */
 
var requireAll = function() {
      try {
        return require('require-all').apply(this, arguments);
      } catch(e) {
        if(e.code != 'ENOENT')
          throw e;
      }
    };

module.exports = {
  controllers: (function(){
    // Require all controllers in folder /controllers
    var ctrls;
    
    ctrls = requireAll(__dirname + "/controllers", {
      filter: /(.+)\.(?:js|coffee)?$/
    });
    
    return ctrls;
  }()),
};