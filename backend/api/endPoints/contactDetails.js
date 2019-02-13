import express from 'express';
import mongoose from 'mongoose';

import contact from '../models/contactDetails'
const contactRouter = express.Router();

contactRouter.get('/',(req, res, next)=> {
    contact
    .find()
    .select('-__v')
    .exec()
    .then((response) => {
        const formatedResponse = {
            count: response.length,
            contacts: response.map(contact => {
                return {
                    id:contact._id,
                    firstName:contact.firstName,
                    lastName: contact.lastName,
                    age: contact.age,
                    phone: contact.phone
                }
            })
        }
        res.status(200).json(formatedResponse)
    })
    .catch((err) => {
        console.log(err)
    })
})


contactRouter.post('/details',(req,res,next) => {

    const contactDetails = new contact({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        phone: req.body.phone
    })
    
    contactDetails.save()
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
    res.status(201).json({
        message:'POST Submitted successfully',
        details:contactDetails
    })
})

contactRouter.post('/details/:id',(req,res,next) => {

    contact.updateOne({ _id: req.params.id},{ $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        phone: req.body.phone
    } })
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json({
            error:err
        });
    })
})

contactRouter.delete('/details/:id',(req,res,next) => {
    contact.remove({_id: req.params.id})
    .exec()
    .then((result => {
        res.status(200).json(result)
    }))
    .catch(err => {
        res.status(500).json(err)
    })
})

export default contactRouter;