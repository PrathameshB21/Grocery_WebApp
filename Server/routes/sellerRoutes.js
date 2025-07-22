import express from 'express'
import isSellerAuthCheck from '../middleware/sellerAuthCheck.js';
import { sellerLogin,sellerLogout ,isSellerAuthorirzed } from '../controllers/sellerController.js';

const selllerRouter=express.Router();

selllerRouter.post("/sellerLogin",sellerLogin);
selllerRouter.get('/sellerAuthorization',isSellerAuthCheck,isSellerAuthorirzed);
selllerRouter.get('/sellerLogout',isSellerAuthCheck,sellerLogout);



export default selllerRouter;