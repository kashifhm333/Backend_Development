import e from 'express';
import express from 'express';
const app = express();

const PORT = 3000;

app.use((req,res,next)=>{
    console.log(`middleware is running`);
    next();     // if you don't call next() then the request will be
               //  stuck and won't proceed to the next middleware or route handler
});

app.use((req,res,next)=>{
    console.log(`middleware 2 is running`);
    next();
});

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/about",(req,res)=>{
    res.send("This is about page");
});

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send("Something went wrong!");
})



app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
})