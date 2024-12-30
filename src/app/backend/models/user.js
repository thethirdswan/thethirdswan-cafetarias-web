import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
    },
    lokasi: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    admin: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', userSchema);