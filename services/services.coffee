###*
 # services.coffee
 # 
 # This file is subject to the terms and conditions defined in
 # file 'LICENSE', which is part of this source code package.
 # 
 # Crafted at FlightSafety International®.
###

module.exports =
  # It imports the content of these files here
  imports: [
    "./parameters.coffee"
    "./HTTP/services.coffee"
    "./Core/services.coffee"    
  ]
  
  parameters: 
    "kernel.file": "./Kernel"
  
  services:
    kernel:
      class: "%kernel.file%"
      isSingleton: true
      calls: [
        ["setContainer", ["@container"]]
      ]
    ORM:
      class: "sequelize"
      arguments: [
        "%ORM.database%"
        "%ORM.username%"
        "%ORM.password%"
        "%ORM.options%"
      ]