"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    (async()=>{
      const resposne = await fetch("http://localhost:3001/users")
      const data = await resposne.json() 
      console.log(data)
      setUsers(data)
    })()
  },[])
  return (
    <div>{users.map((user)=>{
      return <div>{JSON.stringify(user)}</div>
    })}</div>
  );
}
