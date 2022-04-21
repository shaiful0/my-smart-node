const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res) =>{
  res.send('Hello fuckers , hello my name is shariful islam abc')
});


const users = [
  {id:1, name:'sabana', email:'shariful0401@gmail.com' , phone:'01717863711'},
  {id:2, name:'saban', email:'shl0401@gmail.com' , phone:'01717863711'},
  {id:3, name:'josim', email:'ful0401@gmail.com' , phone:'01717863711'},
  {id:4, name:'riyaj', email:'shrul0401@gmail.com' , phone:'01717863711'},
  {id:5, name:'alomgir', email:'harif0401@gmail.com' , phone:'01717863711'},
  {id:6, name:'shakib khan', email:'ariful0401@gmail.com' , phone:'01717863711'},
  {id:7, name:'manna khan', email:'aril0401@gmail.com' , phone:'01717863711'},
]

app.get('/users', (req,res) =>{
  // console.log('query', req.query)
  // filter by quary parameter
  if(req.query.name){
    const search = req.query.name.toLowerCase();
    const matched = users.filter(user => user.name.toLowerCase().includes(search));
    res.send(matched);
  }
  else{
    res.send(users);
  }
})

app.get('/user/:id', (req,res) =>{
  console.log(req.params);
  const id = parseInt(req.params.id); 
  const user = users.find(u => u.id === id);
  res.send(user);
})


app.post('/user', (req, res) =>{
  console.log('request',req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
})


app.listen(port,() =>{
  console.log('Listening to port', port);
})