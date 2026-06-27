const express = require('express');
const app = express();
const userModel = require('./usermodel');
const usermodel = require('./usermodel');

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get("/create", async (req,res)=>{

    let createdUser = await userModel.create({
        name: "Kashif Hussain",
        username: "kashifhm333",
        email: "memonkashif0001@gmail.com" 
    })
    res.send(createdUser);
})

app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({ name: "Kashif Hussain" }, { username: "kashifhm333_updated" }, { new: true });
    res.send(updatedUser);
});


app.get('/read',async (req,res)=>{
  // let users = await userModel.find(); // if you want to get all users in array
  // let users = await userModel.find({username: "kashifhm333_updated"}); // if you want to get specific user
  let users = await userModel.findOne({username: "kashifhm333_updated"}); // if you want to get specific user in object form

  res.send(users);
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});