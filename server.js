const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

const users = [
    {
        id:1,
        name:"priyank",
        balance: 1000        
    },
    {
        id:2,
        name:"Aman",
        balance: 1200        
    }
]

const transactions = [
    {
        id:"afd",
        amount: 120,
        receiver: 1
    }
]

app.set('view engine', 'ejs');
app.get('/',(req,res,next)=>{
    res.render('index');
});
app.get('/users',(req,res,next)=>{
    res.render('users',{users});
})
app.get('/transactions',(req,res,next)=>{
    res.render('transactions',{transactions})
})
app.get('/transfer',(req,res,next)=>{
    res.render('transfer',{users})
})


app.listen(PORT, ()=>{
    console.log(`App is on port no : ${PORT}`)
})