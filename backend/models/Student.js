const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    course: {
        type: String,
        required: true,
    },
    enrollmentDate: {
        type: Date,
        default: Date.now,
    },
    // Optional: link to a User account if they have signed up
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Student', studentSchema);
