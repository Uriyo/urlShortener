const shortid = require("shortid");
const URL =require('../model/Url');
async function generateURL(req,res){
    const body=req.body;
    if(!body.url) return res.status(400).json({error:"url is required"})

    const shortId=shortid();
    await URL.create({
        shortId:shortId,
        redirectURL: body.url,
        vistHistory:[]
    });

    return res.json({id:shortId});
}

async function getAnalytics(req,res){
    const shortId=req.params.shortId;
    //console.log(shortId);
    //if(!shortId) return res.status(400).json({error:"shortID is required"})

    const result =await URL.findOne({shortId});
    return res.json({
      totalClicks: result.vistHistory.length,
      analytics: result.vistHistory,
    });
}

module.exports={
    generateURL,
    getAnalytics,
}