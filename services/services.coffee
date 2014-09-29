module.exports =
  parameters:
    "express.file": "./Express"

  services:
    express:
      class: "%express.file%"
      isSingleton: true
      isObject: true
      calls: [
        [ # When the service is going to be requested, it will call this method
          'listen'
          [
              process.env.PORT
              process.env.IP
              () ->
                console.log "HTTP server listening."
          ]
        ] # ... whitch allows to listen to HTTP requests.
      ]