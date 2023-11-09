import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    title: String,
    avatar: String,
    refreshToken: String,
    rentedCars: [{ type: mongoose.Schema.Types.ObjectId, ref: 'cars' }],
});

const User = mongoose.model('users', userSchema);

export default User;