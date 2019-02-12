import express from 'express';

const holidayListRouter=express.Router();

holidayListRouter.get('/' , (req, res, next) => {
    res.status(200).json({
        message:'GET CALL FOR LIST OF HOLIDAYS'
    })
})

holidayListRouter.post('/', (req, res, next) => {
    const holidayData = {
        date:req.body.date
    }
    res.status(201).json({
        message:'POST CALL FOR LIST OF HOLIDAYS',
        data:holidayData
    })
})

holidayListRouter.post('/:id', (req, res, next) => {
    res.status(201).json({
        message:'Filter Based on ID LIST OF HOLIDAYS',
        id:req.params.id
    })
})

export default holidayListRouter;