###*
 # parameters.coffee
 # 
 # This file is subject to the terms and conditions defined in
 # file 'LICENSE', which is part of this source code package.
 # 
 # Crafted at FlightSafety International®.
###

module.exports =
    "appmgr.basedir": "#{__dirname}/../../apps/"
    
    "express.port": process.env.PORT
    "express.host": process.env.IP