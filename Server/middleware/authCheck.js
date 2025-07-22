
import jwt from 'jsonwebtoken'
import 'dotenv/config'


export const authCheck = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.json({ success: false, message: 'token not found' })
    }
    try {
        console.log(`loop start`)
        const decodedToken = jwt.verify(token, process.env.JWT_Secret);
        console.log(`deccoded token`, decodedToken)


        if (decodedToken.id) {
            console.log(`token id`, decodedToken.id);
            if (!req.body) req.body = {};
            req.body.userId = decodedToken.id;
        } else {
            return res.json({ success: false, message: "Error While verifYing userId" })
        }
        next();
    } catch (error) {
        console.log(error)
        return res.json({ success: false, message: error.message })
    }
}
