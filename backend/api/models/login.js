import mongoose from 'mongoose';

const login = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    phone: String,
    emailAddress: String
})

export default mongoose.model('loginModel' , login)