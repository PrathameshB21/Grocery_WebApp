import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        reuired: true
    },
    password: {
        type: String,
        required: true
    },
    cartItems: {
        type: Object,
        default: {}
    }

}, { minimize: false });

const UserModel = mongoose.models.User || mongoose.model('User', userSchema);
export default UserModel;