import shortid from "shortid"
import Url from '../models/url.js'

export async function handleGenerateNewUrl(req,res){
    const body=req.body;
    if(!body.url) return res.status(400).json({error:"url required"})
    const shortId=shortid.generate();
    await Url.create({
        shortId:shortId,
        redirectUrl:body.url,
        visitedHistory:[]
    })
    return res.json({id:shortId})

}
export default async function handleAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await Url.findOne({ shortId });

    if (!result) {
        return res.status(404).json({ error: "URL not found" });
    }

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

