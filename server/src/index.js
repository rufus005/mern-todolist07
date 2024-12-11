const express =require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require("./models/user")

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://rufus090400:EJpz7776bU30LUSj@crud.l6ift.mongodb.net/crud?retryWrites=true&w=majority&appName=Crud")

app.get('/', (req,res) => {
    userModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json((err))
    )
})

app.get('/getUser/:id', (req,res) => {
    const id = req.params.id;
    userModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json((err))
    )
})

app.put('/updateUser/:id',(req,res) => {
    const id = req.params.id;
userModel.findByIdAndUpdate({_id:id}, {name:req.body.name, email:req.body.email,age:req.body.age})
.then(users => {
    return res.json(users)
})
.catch(err => res.json(err))
})

app.delete("/deleteUser/:id", (req,res) => {
    const id = req.params.id;
    userModel.findByIdAndDelete({_id:id})
    .then(res=> res.json(res))
    .catch(err => res.json(err))
})
app.post("/createUser",async (req,res) => {
   await userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})



app.listen(5000, (req,res)=> {
    console.log("server is running on");
    
})