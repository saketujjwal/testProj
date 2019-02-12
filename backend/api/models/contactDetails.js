import mongoose from 'mongoose';

const contactDetails = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    age: String,
    phone: String
});

export default mongoose.model('contact',contactDetails);