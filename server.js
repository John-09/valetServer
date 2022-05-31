const express=require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const knex=require('knex');
const checkIn=require('./Controllers/checkIn');
const checkOut=require('./Controllers/checkOut');



const db=knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'root',
      database : 'checkIn'
    }
  });



const app=express();

app.use(bodyParser.json());
app.use(cors())

//app.get('/',(req,res)=>{res.send('success')})
app.post('/checkIn',(req,res)=>{checkIn.handleRegister(req,res,db)})
app.post('/checkOut',(req,res)=>{checkOut.HandleCheckout(req,res,db)})

app.listen(3000,()=>{
    console.log('App is working on 3000');
})


//checkin-post
//checkout-post-success or fail
