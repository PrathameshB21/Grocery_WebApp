import { strict } from 'assert';
import 'dotenv/config'
import jwt from 'jsonwebtoken'
export const sellerLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (email !== process.env.Seller_Email) {
            return res.json({ success: false, message: "Invalide Admin Email" })
        }
        if (password !== process.env.Seller_Pass) {
            return res.json({ success: false, message: "Inavlide Admin Password" })
        }
        if (email === process.env.Seller_Email && password === process.env.Seller_Pass) {
            const sellerToken = jwt.sign({email},process.env.JWT_Secret,{ expiresIn: '1d' });

            return res.cookie('sellerToken', sellerToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: process.env.NODE_ENV === "production" ? 'none' : 'strict',
                maxAge: 24 * 60 * 60 * 1000

            }).json({ success: true, message: "Admin Logged In", token: sellerToken })
        }
    } catch (error) {
        console.log(`error`, error);
        return res.json({ success: false, message: error.message })
    }
}

export const isSellerAuthorirzed = async (req, res) => {
    try {
        return res.json({ success: true, message: "Authorized" })
    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}

export const sellerLogout = async (req, res) => {
    try {
        console.log(`Logout loop start`)
       return res.clearCookie('sellerToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        }).json({ success: true, message: "Logged out" })
    } catch (error) {
        console.log(`error`,error)
        return res.json({ success: false, message: error.message })

    }
}