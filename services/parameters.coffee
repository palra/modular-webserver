###
 # parameters.coffee
 # 
 # This file is subject to the terms and conditions defined in
 # file 'LICENSE', which is part of this source code package.
 # 
 # Crafted at FlightSafety International®.
###

###############################################################################
#                                                                             #
# This file is meant to be hidden, it contains all sensible data              #
# of your application.                                                        #
# Make sure to add it to your `.gitignore` !                                  #
#                                                                             #
###############################################################################

module.exports =
  parameters:     
      "express.port": process.env.PORT
      "express.host": process.env.IP

      "ORM.database": "palra"
      "ORM.username": "palra"
      "ORM.password": "palra"
      "ORM.options":
        dialect: "postgres"