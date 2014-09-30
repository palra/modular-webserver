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
    
  services:
    appmgr:
      class: "%appmgr.file%"
      isSingleton: true
      arguments: [
        "%appmgr.basedir%"
      ]