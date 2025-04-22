import React, { useState, useEffect, use } from 'react';
import ReactDOM from 'react-dom';

function User(){
    const[error, setError] = useState(null);
    const[isLoaded, setIsLoaded] = useState(false);
    const[users, setUsers] = useState(false);


    useEffect(()=>{
        fetch("/users")
        .then(res=>res.json())
        .then(
            (result)=>{
                setIsLoaded(true);
                setUsers(result)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if(error){
        return <div>Error: {error.message}</div>
    } else if(!isLoaded){
        return <div>Loading ...</div>
    }else{
        return(
            <ul>
                {users.map(user => (
                    <li>
                        Kullanici Adi: {user.username}
                    </li>
                ))}
            </ul>
        )
    }

}

export default User;