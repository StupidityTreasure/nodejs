import express from "express"

import handleGenerateNewUrl from "../controllers/url.js"
import handleAnalytics from "../controllers/url.js"
const router=express.Router();
router.post("/",handleGenerateNewUrl)

router.get('/analytics/:shortId',handleAnalytics)

export default router
