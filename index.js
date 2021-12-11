

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Student from './models/student.js'
import morgan from 'morgan';
import cors from 'cors';

const app = express();

mongoose.connect("mongodb+srv://zeeshan:zeeshan ahmed 1234@cluster0.xgzzk.mongodb.net/myFirstDatabase?retryWrites=true&w=majorit");

mongoose.connection.once('open', () => {
    console.log('=================== ISI Secrete Database Connected ===================');
});
mongoose.connection.on('error', () => {
    console.log('=================== Black Vigo is outside your home ===================');
});

// zeesahnahmed
app.use(cors());

app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ extended: false }))

app.use(morgan('tiny'));





// app.post('/update-student/:id', async (req, res) => {
//     let { id } = req.params;
//     // console.log(req.body, id);
//     let updated = await Student.findOneAndUpdate({ _id: id },
//         { rollNumber: req.body.rollNumber });
//     res.json(updated);
// });

// app.post('/delete-student/:id', async (req, res) => {
//     let { id } = req.params;
//     // console.log(req.body, id);
//     let deleted = await Student.findOneAndDelete({ _id: id })
//     res.json(deleted);
// });






// app.get('/get-student/:studentName', async (req, res) => {
//     let { studentName } = req.params;
//     console.log(studentName);
//     let allStudents = await Student.find({ studentName: studentName }); // returns array
//     res.json(allStudents);
// });



// app.get('/get-student-pagination/:pageNumber/:studentPerPage', async (req, res) => {
//     let { pageNumber, studentPerPage } = req.params;
//     console.log(pageNumber, studentPerPage)
//     let skipCount = (pageNumber - 1) * studentPerPage;
//     let allStudents = await Student.find().limit(Number(studentPerPage)).skip(skipCount); // returns array
//     res.json(allStudents);
// });



app.get('/get-one-book/:studentName', async (req, res) => {
    let { studentName } = req.params;
    console.log(studentName,"studentname");
    let allStudents = await Student.find(); // returns one object
    res.json(allStudents);
});








app.get('/get-all-books', async (req, res) => {
    console.log("working");
    console.log(req.url);
    let allStudents = await Student.find(); // returns array
    res.json(allStudents);
    console.log(allStudents,"students");
});

app.post('/add-books', async (req, res) => {
    console.log(req.body);
    let student = new Student({
        bookName: req.body.bookName,
        author: req.body.author,
        price: req.body.price,
        genre: req.body.genre

    });
    try {
        let savedData = await student.save();
        res.json(savedData);
    } catch (e) {
        console.log(e);
        res.json(e);
    }

    

    // student.save(function (e, savedData) {
    //     if (express) {
    //         res.json(e);
    //     }
    //     else {
    //         res.json(savedData);
    //     }
    // })

    // student.save()
    //     .then((savedData) => {
    //         res.json(savedData);
    //     })
    //     .catch((e) => {
    //         res.json(e);
    //     })

});

// app.use((req, res) => {
//     console.log(req.body, '***************');
//     res.end();
// });

app.listen('5000', () => {
    console.log('=================== server started on 5000 ===================');
});
