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
    "express.file": "./Express"
    "express.port": process.env.PORT
    "express.host": process.env.IP
    
    "router.file": "./Router"

  services:
    express:
      class: "%express.file%"
      isSingleton: true
      isObject: true
      calls: [
        [ # When the service is going to be requested, it will call this method
          'listen'
          [
              "%express.port%"
              "%express.host%"
              () ->
                log.info "HTTP server listening."
          ]
        ] # ... which allows to listen to HTTP requests.
      ]
    
    router:
      class: "%router.file%"
      isSingleton: true
      arguments: [
        "@express"
        {
          caseSensitive: false,
          strict: false
        }
      ]