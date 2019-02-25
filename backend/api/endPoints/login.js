import express from 'express';
import mongoose from 'mongoose';

import loginModel from '../models/login'

const loginRouter = express();

loginRouter.post('/signUp', (req, res, next) => {
    const loginModelSignUp = new loginModel({
        _id:new mongoose.Types.ObjectId(),
        userName:req.body.userName,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        emailAddress: req.body.emailAddress
    })
    

    loginModelSignUp
    .save()
    .then((response) => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: err
        })
    })
})

loginRouter.post('/signIn' , (req,res,next) => {
    loginModel.findOne({userName: req.body.userName, password: req.body.password})
    .exec()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

export default loginRouter;