const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoticeSchema = new Schema({
    type: {
        type: String,
    },
    image: {
        type: String,
    },
    cloudinary_id: {
        type: String,
    },

});


// const Crop = 

module.exports = mongoose.model('User', NoticeSchema);