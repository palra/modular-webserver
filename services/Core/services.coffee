###*
 # services.coffee
 # 
 # This file is subject to the terms and conditions defined in
 # file 'LICENSE', which is part of this source code package.
 # 
 # Crafted at FlightSafety International®.
###

module.exports =
  parameters:
    "appmgr.file": "./AppManager"
    "appmgr.basedir": "#{__dirname}/../../apps"
    "appfactory.file": "./AppFactory"
    "appfactory.loadingMethod": "loadFolder"
    
  services:
    appfactory:
      class: "%appfactory.file%"
      isObject: true
    appmgr:
      class: "%appmgr.file%"
      isSingleton: true
      arguments: [
        "%appmgr.basedir%"
        "@appfactory"
        "@container"
      ]