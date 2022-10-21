const mongoose = require('mongoose')

const RestaurantSchema = mongoose.Schema({
    Restaurantname:{ type:String,
            required:true
        }
    
})

module.exports = mongoose.model('Restaurant', RestaurantSchema)