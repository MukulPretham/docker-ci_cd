import { WebSocketServer } from "ws";
import { client } from "@repo/db/client"
const server = new WebSocketServer({port: 8080})

server.on("connection", (socket)=>{
    socket.send("connection sucessful")
    socket.on("message", async ()=>{
        await client.user.create({
            data:{
                username: Math.random().toString(),
                password: Math.random().toString()
            }
        })
        socket.send("saved to db")
    })
})