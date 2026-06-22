import express from 'express';

const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
// app.use(express.json());

// In-memory "database"
let tasks = [
    { id: 1, title: "Learn Express basics", completed: false }
];

// GET: Fetch all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// POST: Add a new task
// app.post('/tasks', (req, res) => {
//     console.log('Request body:', req.body);

//     const newTask = {
//         id: tasks.length + 1,
//         title: req.body.title,
//         completed: false
//     };

//     tasks.push(newTask);

//     console.log('Tasks array:', tasks);

//     res.status(201).json(newTask);
// });

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});