const mongoose = require('mongoose')

const ActivitySchema = mongoose.Schema({
    Activityname:{ type:String,
            required:true
        }
    
})

module.exports = mongoose.model('Activity', ActivitySchema)