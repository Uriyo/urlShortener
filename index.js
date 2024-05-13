const express=require('express');
const urlRoute=require('./routes/routes');
const URL=require('./model/Url');
const {connectMongoDB}=require('./app');
const axios = require('axios');
const requestIp = require('request-ip');
const cors=require('cors');
require('dotenv').config()
const app= express();
const PORT=process.env.PORT;
const Token=process.env.ACESS_TOKEN;


connectMongoDB(process.env.MONGO_URI)
.then(() =>
  console.log("DB connected")
);

app.use(cors());
app.use(express.json());

app.use(requestIp.mw());

app.use("/url",urlRoute);

app.get('/shortened-link-info', async (req, res) => {
    try {
        const { shortenedLink } = req.query;

        const clientIp = req.clientIp;

        const ipInfoResponse = await axios.get(`https://ipinfo.io/${clientIp}?token=${Token}`);
        const locationInfo = ipInfoResponse.data;

        
        res.json({
            ip: clientIp,
            location: locationInfo
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/:shortId',async(req,res)=>{
    const shortId=req.params.shortId;
    const entry=await URL.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: {
          vistHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );
    res.redirect(entry.redirectURL)
})


app.listen(PORT,()=> console.log(`Server running on ${PORT}`));