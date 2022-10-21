const mongoose = require('mongoose')

const GasSchema = mongoose.Schema({
    gasname:{ type:String,
            required:true
        },
    gasnumber:{ type:String,
                    required:true
    },

    gasaddress:{ type:String,
        required:true
    },
    
    gasurl:{ type:String,
        required:true
    }


})

module.exports = mongoose.model('Gas', GasSchema)