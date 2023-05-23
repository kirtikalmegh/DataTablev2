import React, { useEffect, useState } from 'react'
import { jsonplaceholder } from '../ApiCall/typecode'

const ApiCall = () => {
    const [user, setUser] = useState({})
    const fetchData = () =>{
            jsonplaceholder('/users')
            .then(function(responce) {
            console.log(responce.data);
            setUser(responce.data)
        })
        .catch(function(error) {
            console.log(error)
        })
    }
  return (
    <div>
        <h1>User Information</h1>
        <button onClick={() => fetchData()}>fetchData</button>
        <div>
            <ul>
                {Object.keys(user).length == 0 ?
                ("No Data found" ):
                (Object.keys(user).map((item,index) =>
                {
                    return( 
                    <p>
                        {item}:{user[item].toString()}
                    </p>
                    )
                })
                )}
            </ul>
        </div>
        
    </div>
  )
}

export default ApiCall