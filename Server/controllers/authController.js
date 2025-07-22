import { error, log } from "node:console";
import UserModel from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { json } from "node:stream/consumers";

const jwtSecret = process.env.JWT_Secret;
export const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.json({ success: false, message: "All field are required" })
        }

        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.json({ success: false, message: "User with this email id already exist" })
        }

        const salt = await bcrypt.genSalt(10);


        const HashedPass = await bcrypt.hash(password, salt);



        const user = await new UserModel({
            name: name, email: email, password: HashedPass

        })
        await user.save();

        const authToken = await jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '1d' })
        res.cookie('token', authToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 24 * 60 * 60 * 1000
        }).json({ success: true, message: "User registered successfully", userDetails: { email: user.email, name: user.name } })

    } catch (error) {
        console.log(`error`, error)
        res.json({ success: false, message: "Error while regestring user" })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.json({ success: false, message: "All field are required" })
        }

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User with this email id does not exist" })
        }

        const isPassMatch = await bcrypt.compare(password, user.password);

        if (!isPassMatch) {
            return res.json({ success: false, message: " Invalid Pass" });
        }
        const authToken = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '1d' });

        res.cookie('token', authToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 24 * 60 * 60 * 1000

        }).json({ success: true, message: "User loggedIn successfully", userDetails: { email: user.email, name: user.name } })

    } catch (error) {
        console.log(`error`, error)
        res.json({ success: false, message: "Error while regestring user" })
    }
}

export const logout = async (req, res) => {
    try {
        return res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',

        }

        ).json({ success: true, message: "User LoggedOut" })
    } catch {
        return res.json({ success: false, message: `Error while logging out ,${error}` })

    }
};


export const isAuthorizedUser = async (req, res) => {
    try {
        const { userId } = req.body;

        const User = await UserModel.findById(userId).select('-password');

        if (!User) {
            return res.json({ success: false, message: "Invalid Id" })
        }
        if (User.id === userId) {

            return res.json({ success: true, message: "Authorized User", UserDetails: User });
        } else {
            return res.json({ success: false, message: "Unauthorized User" });
        }

    } catch (error) {

        return res.json({ success: false, message: error.message })
    }
}