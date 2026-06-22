const express = require("express");
const path = require("path");
// import path from "path";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // is used to parse the incoming request body and make it available in req.body

app.use(express.static(path.join(__dirname, "public")));  // is used to serve static files from the public directory

const PORT = 3000;
app.set("view engine", "ejs");

app.get("/", (req, res) => {   // render is used to render the ejs file
  res.render("index");       // index.ejs file will be rendered when the user visits the root route
});



// Dynamic Routing
                                    //by using ":" we can create a dynamic route that can accept any value as a parameter
app.get("/profile/:username", (req, res) => {  // :username is a route parameter that can be accessed using req.params.username
  const username = req.params.username;
//  res.send("i am at profile page") 
    res.send(`Hello, ${username}!`);  // profile.ejs file will be rendered and the value of username will be passed to the ejs file
});


//  deeep in dynamic routing
app.get("/profile/:username/:age", (req, res) => {  // :age is another route parameter that can be accessed using req.params.age
  const username = req.params.username;
  const age = req.params.age;
  res.send(`Hello, ${username}! You are ${age} years old.`);  // profile.ejs file will be rendered and the values of username and age will be passed to the ejs file
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});