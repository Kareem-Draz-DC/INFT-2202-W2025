import mongoose from 'mongoose'
// Create the User Model
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
})

// Create the User Model. The Model is what houses all the internal CRUD methods provided as tools for us by mongoose to with with MongoDB
export const UserModel = mongoose.model('User', userSchema)