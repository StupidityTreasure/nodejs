import shortid from "shortid"
import url from '../models/url.js'

async function handleGenerateNewUrl(req,res){
    const body=req.body;
    if(!bodyurl) return res.status(400).json({error:"url required"})
    const shortId=shortid(8);
    await url.create({
        shortId:shortId,
        redirectUrl:body.url,
        visitedHistory:[]
    })
    return res.json({id:shortId})

}
export default handleGenerateNewUrl