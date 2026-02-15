const mongoose = require("mongoose");

// Regex validations
const cityRegex = /^[A-Za-z\s]+$/;
const urlRegex = /^(http|https):\/\/[^ "]+$/;
const zipRegex = /^\d{5}-\d{4}$/;
const phoneRegex = /^\d-\d{3}-\d{3}-\d{4}$/;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
    },
    city: {
        type: String,
        required: true,
        match: [cityRegex, "City must contain only letters and spaces"]
    },
    website: {
        type: String,
        required: true,
        match: [urlRegex, "Invalid website URL"]
    },
    zipcode: {
        type: String,
        required: true,
        match: [zipRegex, "Zip code must be in format 12345-1234"]
    },
    phone: {
        type: String,
        required: true,
        match: [phoneRegex, "Phone must be in format 1-123-123-1234"]
    }
});

module.exports = mongoose.model("User", UserSchema);