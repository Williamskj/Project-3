const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsersSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
},
);
