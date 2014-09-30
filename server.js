/*******************************************************************************
 * server.js
 * 
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 * 
 * Crafted at FlightSafety International®.
 */

var Application = require('./Application');
var app = new Application('dev');
app.start();