const { Schema, model, Types } = require('mongoose')

const JobSchema = new Schema({
    company: {
        type: String,
        required: [true, 'Please provide a company'],
        maxlength: 50
    },
    position: {
        type: String,
        required: [true, 'Please provide a position'],
        enum: ["intern", "junior", "senior", "lead", "manager"],
        maxlength: 100
    },
    status: {
        type: String,
        enum: ["applied", "pending", "interview", "hired", "rejected"],
        default: "pending"
    },
    jobLocation: {
        type: String,
        default: 'my city',
    },
    skills: {
        type: [String],
        required: [true, 'Please provide skills'],
        default: []
    },
    createdBy: {
        type: Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide a user']
    },
    avatarColor: {
        type: String
    }
}, { timestamps: true })

module.exports = model('Job', JobSchema)
