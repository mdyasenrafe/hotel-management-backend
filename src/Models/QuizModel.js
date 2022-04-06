const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    courseId: {
        type: String,
        required: true,
    },
    courseName: {
        type: String,
        required: true,
    },

    quiz: [
        {
            quizTitle: {
                type: String,
            },
            quizAnswer: {
                type: String,
            },
            quizOption: {
                type: [String],
            },
            coursePrice: {
                type: String,
            },
        },
    ],



    createAt: {
        type: Date,
        default: new Date(),
    },

});

const QuizModel = mongoose.model("quiz", QuizSchema);
module.exports = QuizModel;
