/*******************************************************************************
 * HelloController.js
 * 
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 * 
 * Crafted at FlightSafety International®. 
 */

var ORM = container.get('ORM');

get("/", function(req, res) {
  res.render('apps/HelloWorld/views/index', {name: 'World'});
});
