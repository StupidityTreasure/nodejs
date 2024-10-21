import express from "express"
import urlGenerator from "../controllers/url.js"
const router=express.Router();
router.post('/',urlGenerator)

export default router