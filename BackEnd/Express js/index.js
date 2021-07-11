require('dotenv').config();
const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('Hi! There... How are you today!')
})

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3, 4, 5])
})

// app.get('/api/courses/:id', (req, res) => {
//     res.send(req.params.id)
// })

const courses = [
    { id: 1, course: "Course1" },
    { id: 2, course: "Course2" },
    { id: 3, course: "Course3" },
    { id: 4, course: "Course4" }
]

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if (!course) res.status(404).send("Course not available");
    res.send(course);
})

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params)
    res.send(req.query)
})

// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.query)
// })

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Listening to port no :- ${port}`);
})