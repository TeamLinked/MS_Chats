const express = require('express');
const mongoose =require('mongoose');
const app=express();
const path=require('path');
const morgan= require('morgan');
const bodyParser = require('body-parser')

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/crud-mongo'



//connecting to db
const run= async()=>{
    await mongoose.connect('mongodb://localhost:27017/crud-mongo')
   .then(db=> console.log('connecting to db'))
   .catch(err=> console.log(err))
   
    await app.listen(app.get('port'),()=>{
       console.log(`Server on port ${app.get('port')}`);
   });
   }
//importar rutas
const indexRoutes=require('./routes/index');
//settings
app.set('port',process.env.PORT || 3020); 
//middlewares
app.use(morgan('dev'));

app.use(bodyParser.json())

app.use(express.urlencoded({extended:false}));
//routes
app.use('/', indexRoutes);
//start the server

run();