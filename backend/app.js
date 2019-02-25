import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';

import holidayListRouter from './api/endPoints/holidayList'
import contactRouter from './api/endPoints/contactDetails'
import loginRouter from './api/endPoints/login'

mongoose.connect(
    'mongodb://admin:Bhupesh5429@cluster0-shard-00-00-1nvgj.mongodb.net:27017,cluster0-shard-00-01-1nvgj.mongodb.net:27017,cluster0-shard-00-02-1nvgj.mongodb.net:27017/first-test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
    {
        useNewUrlParser: true 
    }
    )

const app=express();

//Enable API's to accept body when making request
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

//CORS Issue and header information
app.use((req,res,next)=> {
    res.header("Access-Control-Allow-Origin",'*');
    res.header("Access-Control-Allow-Headers", "Origin , X-Requested-With , Content-Type, Accept, Authorization");

    if(req.method ==='OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    }

    next();
})

//List of API's endPoints
app.use('/holidayList',holidayListRouter);
app.use('/contact',contactRouter)
app.use('/login',loginRouter)

//Error Handling
app.use((req, res, next) => {
    const err = new Error('URL not FOUND');
    err.status = 404;
    next(err)
})

app.use((err , req, res, next) => {
    res.status = err.status || 500;
    res.json({
        "Error-Message":err.message
    })
})

export default app;