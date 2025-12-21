import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Axios() {
    const[userData,setData]=useState([]);
   useEffect( ()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(response)
        setData(response.data)
    })
    
   },[])

  return (
    <div>Axios
     {userData.map((data)=>{
        return(
            <h1>{data.name}</h1>
        )
     })}


    </div>
  )
}
