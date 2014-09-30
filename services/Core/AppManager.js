/*******************************************************************************
 * AppManager.js
 * 
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 * 
 * Crafted at FlightSafety International®. 
 */

/**
 * `require` all sub-folders of a given folder.
 * 
 * @param {string} dirname The folder to require its subfolders
 * @returns An object containing all theses folder mapped to their name.
 */
var requireFolders = function(dirname) {
        var fs = require('fs');
        try {
            var files = fs.readdirSync(dirname);
            var modules = {};
            
            files.forEach(function (file) {
                var filepath = dirname + "/" + file;
                if (fs.statSync(filepath).isDirectory()) {
                    modules[file] = require(filepath);
                }
            });
            
            return modules;
        } catch (e) {
            if(e.code != "ENOENT")
                throw e;
        }
    },
    util = require("util"),
    ServiceContainerAware = require('../ServiceContainerAware')
    ;

/**
 * Constructor of the applications manager.
 * According to a 
 * 
 * @param {string} basedir Folder where are stored apps
 * 
 * @constructor
 * @public
 */
function AppManager(basedir) {
    this.basedir = basedir;
    this.apps = requireFolders(basedir);
    
    log.debug("App manager initialized : " +
        Object.keys(this.apps).length +
        " app(s) detected.");
}

util.inherits(AppManager, ServiceContainerAware);

/**
 * Does the manager has registered the requested app ?
 * 
 * @param {string} app The name of the app
 * @returns {boolean} true if it exists, false if not.
 */
AppManager.prototype.get = function(app) {
    return this.apps[app];
};

/**
 * @param {string} app The name of the app
 * @returns {boolean} The app
 */
AppManager.prototype.has = function(app) {
    return this.get(app) !== undefined;
};

module.exports = AppManager;