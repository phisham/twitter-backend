const {TwitterApi}=require('twitter-api-v2');
const Sentiment=require('sentiment');
const sentiment=new Sentiment();

const express =require('express');
const bodyParser=require("body-parser");
const app=express();
const router=express.Router();
app.use(bodyParser.urlencoded({extended: true}));
const cors = require('cors');
app.use(cors());

const client=new TwitterApi({
    appKey:'jakSk2nehh84BPKNZdqlZq2Dx',
    appSecret:'9NPeEDLQCl5sIs2br8Ts8l4br9RmsMZBqdMoB1OqiOzKXRm8LO',
    accessToken:'1515018167881703427-DLmWqZs55BwY55xRCAhWXShdCyqTpi',
    accessSecret:'dFAWdc2PCmVGcY3BIRbHCjUstxVTqv5dTrc99e7j06rAE'
})
// const client=new TwitterApi('AAAAAAAAAAAAAAAAAAAAAPggbgEAAAAAD3CAyknNrx8hWWBDBQoP2cEUfUU%3DPjAJpdb5K7Kb2jG9ME0s2ikF3pgzsPt7Shkn00hTIvHvUb3mOG');
var id;


app.get('/get/username/:id',(req,res)=>{
    let t;
    const tweet=async()=>{
    try{
        const d=await client.v2.userByUsername(req.params.id);
        res.send(d);
        
    }
    catch(e){
        console.error(e);
    }
    }
    tweet();
    

})
app.get('/tweets/:id2',(req,res)=>{
    const tweet2=async()=>{
    try{
        const h=await client.v2.get('users/'+req.params.id2+'/tweets');
        res.send(h);
        
    }
    catch(e){
        console.error(e);
    }
    }
    tweet2();
})

app.get('/sentiment/:word',(req,res)=>{
    let {score}=sentiment.analyze(req.params.word);
    res.send({score});
})

app.listen('3000',(req,res)=>{
    console.log("started");
})

