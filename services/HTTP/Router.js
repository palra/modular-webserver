/*******************************************************************************
 * Router.js
 * 
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 * 
 * Crafted at FlightSafety International®. 
 */

var express = require("express");

/**
 * Useful for routing tasks.
 * 
 * @constructor
 * @public
 */
function Router(app, config) {
    // This variable contains the current namespace, here, `app`.
    var lastNamespace = app, expts = this;
    
    // I know that all HTTP methods and express' ones aren't here, but feel free to add them !
    [
        'get',
        'post',
        'put',
        'patch',
        'delete',
        'head',
        'all',
        'param',
        'use',
        'route'
    ].forEach(function(method) {
        // For each method, `exports[method]` will call the method of the `lastNamespace`
        // created.
        expts[method] = function() {
            lastNamespace[method].apply(lastNamespace, arguments);
        };
    });

    // The `namespace` function. When you create a new namespace, you simply create
    // a new router.

    var namespace = expts.namespace = function(basePath, fn) {
        if(!config.router.caseSensitive)
            basePath = basePath.toLowerCase();
        if(config.router.strict && basePath.match(/\/$/))
            basePath = basePath.slice(0,-1);

        // Here.
        var router = express.Router(config.router);

        var oldNamespace = lastNamespace;
        lastNamespace = router;

        // Then, we call the function defining all our routes in that namespace
        fn(router);

        // And we restore the oldNamespace, and bind the new namespace to the older.
        (lastNamespace = oldNamespace).use(basePath, router);
    };
    
    log.verbose('Router loaded');
}

module.exports = Router;