import React, { useEffect, useState } from 'react'

export default function Test() {

  const [user, setUser] = useState([])
  
    useEffect(() => {
        fetch('http://localhost:5001/api/users')
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => console.error(err))
        
    },[])

    
  return (
    <div>
      <h1>Ciao Mamma</h1>
    </div>
  )
}
