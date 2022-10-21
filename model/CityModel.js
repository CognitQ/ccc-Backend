const mongoose = require('mongoose')

const CitySchema = mongoose.Schema({
    cityname:{ type:String,
            required:true
        }
    
})

module.exports = mongoose.model('City', CitySchema)