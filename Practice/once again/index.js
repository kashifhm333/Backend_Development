const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req,res)=>{
    fs.readdir("files",(err,files)=>{
        res.render("index", { files });
    });
})

app.get("/files/:filename",(req,res)=>{
    fs.readFile(`files/${req.params.filename}`,(err,data)=>{
        res.render("show",{title:req.params.filename,description : data});
    })
})



app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})