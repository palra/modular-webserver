/*******************************************************************************
 * Application.test.js
 * 
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 * 
 * Crafted at FlightSafety International®.
 */

describe('Application', function() {
    
    var Application = require('../Application'),
        app = new Application('test');
    
    it('should have a service container', function() {
        app.should.be.an.instanceof(Application);
        
        var SC = require('service-container');
        app.services.should.be.an.instanceof(SC.Container);
    });
    
    it('should load services', function() {
        app.services.get('express').should.not.be.null;
    });
    
    it('should load apps');
    it('should list apps');
    
});