import express from 'express';
const app = express();
const PORT = 3000
app.use(express.json())

let intro = [{
    name: "Kashif Hussain",
    age: 25,
    city: "Karachi"
}]

app.get("/intro", (req, res) => {
    res.json(intro)
})

app.post("/intro", (req, res) => {
    const { name, age, city } = req.body
    
    const newIntro = {
        name: "Ronaldo",
        age: 38,
        city: "Manchester",
        completed: false
    };
    intro.push(newIntro)
    res.status(201).json(newIntro)
}
)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
