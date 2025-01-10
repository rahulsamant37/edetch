const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    
    email: {
        type: String, // Use String instead of email
        required: true,
        unique: true,
    },
    password: {
        type: String, // Use String instead of password
        required: true,
        minlength: 8,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports=User;