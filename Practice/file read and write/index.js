const express = require('express');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;



app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    fs.readdir("./files", (err, files) => {
        res.render("index", { files : files });
    });
});

app.post("/create",(req,res)=>{
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,(err)=>{
        res.redirect("/");
    });
});

app.get("/files/:filename",(req,res)=>{
    fs.readFile(`./files/${req.params.filename}`, "utf8",(err,data)=>{
        res.render("show", { title: req.params.filename, details: data });
    })

})


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
