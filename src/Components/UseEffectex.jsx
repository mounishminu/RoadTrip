import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffectex = () => {
    const [users,setUsers] = useState([])
     
    // const fetchData = async () => {
    //     try{
    //         const response = await fetch(url)
    //         const users = await response.json()
    //         console.log('users',users)
    //         setUsers(users)
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }

    useEffect(()=>{
    //   fetchData()
    
    // using axios
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log('users',users)
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    },[])

  return (
    <>
    {users.map((user) => (
      <p key={user.id} >{user.name}{user.email}</p>
     
    ))}
  </>
  )
}

export default UseEffectex
