const express=require('express');
const { generateURL, getAnalytics } = require("../controllers/UrlController");

const router=express.Router();

router.post('/',generateURL);

router.get("/analytics/:shortId", getAnalytics);

module.exports= router;