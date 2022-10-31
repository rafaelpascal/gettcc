const mongoose = require("mongoose")


const IdSchema = new mongoose.Schema({
    id:{
        type: String,
    },
})

module.exports = mongoose.model("Id", IdSchema);