import express, { json } from "express"
import { client } from "@repo/db/client"
const app = express()

// Add CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json())

app.post("/",async(req,res)=>{
    if(!req.body.username || !req.body.password){
        return res.status(400).json({
            error:"Bad requrst"
        })
    }
    const {username, password} = req.body
    try{
        await client.user.create({
            data:{
                username:username,
                password:password
            }
        })
    }catch(e){
        console.log(e)
    }
    res.json({
        message:"done"
    })
})

app.get("/users",async(req,res)=>{
    const users = await client.user.findMany();
    res.json(users)
})

app.listen((3001),()=>{
    console.log("server started")
})