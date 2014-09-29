var ServiceContainer = require('service-container'),
    requireAll = function(dirname) {
        var fs = require('fs');
        try {
            var files = fs.readdirSync(dirname);
            var modules = {};
            
            files.forEach(function (file) {
                var filepath = dirname + '/' + file;
                if (fs.statSync(filepath).isDirectory()) {
                    return require(filepath);
                }
            });
        } catch (e) {
            if(e.code != "ENOENT")
                throw e;
        }
    },
    EventEmitter = require("events").EventEmitter,
    util = require('util')
    ;

require("coffee-script/register"); // Did I told you I like CoffeeScript ?

/**
 * Application class for the web server.
 * 
 * This class is supposed to wrap all the objects of the website that we
 * organize in two categories :
 *  - services : They are objects common to all modules of the website (Express
 *  HTTP server, ORM, mailer ... )
 *  - apps : Objects acting for a particular piece of the site (controllers,
 *  models, some helpers ...)
 * 
 * @param {string} env The environment of the application. According to the env,
 * the service container will load different configuration files.
 * 
 * @oublic
 * @class
 */
function Application(env)
{
    /**
     * The service container.
     * 
     * @see {@link https://github.com/linkshare/service-container|the docs}
     * @public
     */
    this.services = ServiceContainer.buildContainer(__dirname + "/services", {
        env: env || "dev",
        ignoreNodeModulesDirectory: true
    });
    
    this.apps = requireAll(__dirname + "/apps");
}

util.inherits(Application, EventEmitter);

module.exports = Application;