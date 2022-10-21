const mongoose = require('mongoose')

const PlaceSchema = mongoose.Schema({
    placename:{ type:String,
            required:true
        }
    
})

module.exports = mongoose.model('Place', PlaceSchema)