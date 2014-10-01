/*******************************************************************************
 * express.js
 * 
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 * 
 * Crafted at FlightSafety International®.
 */

var app = container.get('express'),
	express = require('express')
	;

// Configure views
  app.set('views', __dirname + '/..');

  app.engine(".ejs", require('ejs-locals'));
  app.set("view engine", "ejs");
