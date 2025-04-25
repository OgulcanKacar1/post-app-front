import React from "react";
import Post from "../Post/Post";
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import { makeStyles } from "@mui/styles";



const useStyles = makeStyles((theme) => ({
    conatainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        height: '100vh',
        borderRadius: '50px',
    }
}))


function Home() {
    const[error, setError] = useState(null);
    const[isLoaded, setIsLoaded] = useState(false);
    const[posts, setPosts] = useState([]);
    const classes = useStyles();

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
            
            <Container fixed className={classes.conatainer}>
                {posts.map(post =>(
                    <Post title={post.title} text={post.text}/>
                ))}
            </Container>
        );
    }
}

export default Home;