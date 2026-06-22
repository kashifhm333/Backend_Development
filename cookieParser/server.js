import express from 'express';
const app = express();

const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON data
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data



app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

