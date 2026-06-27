const express = require('express');
const { fstat } = require('fs');
const path = require('path');
const app =  express();
const fs = require('fs');

const PORT = 3001;

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));


app.get("/",(req,res)=>{
 fs.readdir(`./files`,(err,files)=>{  
 res.render("index",{files: files})
});
});


app.post("/create",(req,res)=>{
  fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,(err)=>{
    res.redirect("/");
  })
});

app.get("/files/:filename",(req,res)=>{
  // const file = req.params.filename;
  fs.readFile(`./files/${req.params.filename}`, "utf-8",(err,data)=>{
    res.render('show',{title: req.params.filename, details: data})
  })
});

app.post("/edit",(req,res)=>{
  fs.rename(`./files/${req.body.Previous}`, `./files/${req.body.New}`, (err) => {
    res.redirect("/");
  })

 }); 

app.get("/edit/:filename",(req,res)=>{
  res.render("edit", { filename: req.params.filename });
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});