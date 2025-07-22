import jwt from 'jsonwebtoken'
import 'dotenv/config'


const isSellerAuthCheck = async (req, res, next) => {

    const { sellerToken } = req.cookies;
    if (!sellerToken) {
        res.json({ success: false, message: "Token Not Found" })
    }

    try {
        const decodedToken = await jwt.verify(sellerToken, process.env.JWT_Secret)
        console.log(decodedToken);

        if (decodedToken.email === process.env.Seller_Email) {
            console.log(`Token email : ${decodedToken.email} and selller email : ${process.env.Seller_Email}`)

            next()
        } else {
            return res.json({ success: false, message: "Invalide Token" })
        }


    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}

export default isSellerAuthCheck