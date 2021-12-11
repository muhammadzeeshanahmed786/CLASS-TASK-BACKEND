import mongoose from 'mongoose'

// field details
let studentSchema = mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number
    },
    genre: {
        type: Number,
        
    }
})
                        // collection Name 
let Student = mongoose.model("student", studentSchema);

// to use this model in our code
export default Student;