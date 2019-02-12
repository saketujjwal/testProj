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

export default contactRouter;