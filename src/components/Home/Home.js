import React from "react";
import Post from "../Post/Post";
import { useState, useEffect } from "react";

function Home() {
    const[error, setError] = useState(null);
    const[isLoaded, setIsLoaded] = useState(false);
    const[posts, setPosts] = useState([]);

    useEffect(() =>{
        fetch("/posts")
        .then(res => res.json())
        .then(
            (result)=> {
                setIsLoaded(true);
                setPosts(result);
            },
            (error) =>{
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if(error){
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded){
        return <div>Loading ...</div>
    } else{
        return(
            <div className="container">
                <h1>Home</h1>
                {posts.map(post =>(
                    <Post title={post.title} text={post.text}/>
                ))}
            </div>

        );
    }
}

export default Home;