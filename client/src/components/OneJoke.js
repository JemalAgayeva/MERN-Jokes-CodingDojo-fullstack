import React, {useEffect, useState}  from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const OneJoke = (props) => {
    console.log("logging the id of the joke", props.jokeId)

    const [jokeInfo, setJokeInfo] = useState({})

    useEffect(() => { 
        axios.get(`http://localhost:8000/api/jokes/${props.jokeId}`)
        .then(response => {
            console.log("****")
            console.log(response)
            console.log("****")
            setJokeInfo(response.data.results)
            
        })
        .catch(err => console.log(err))
    }, [])
    
    const deleteJoke = (e, jokeId) => {
        console.log("deleting joke", jokeId)
        axios.delete(`http://localhost:8000/api/jokes/delete/${props.jokeId}`)
            .then(response => {
                console.log("deleted")
                console.log(response)
                navigate("/jokes")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1 className="text-info mb-5">Details of One Joke:</h1>
            {jokeInfo == null? <h5 className="text-secondary mb-5">No matching joke found</h5>:
            <>
            <p>Written by: {jokeInfo.writtenBy}</p>
            <p>Content: {jokeInfo.content}</p>
            <button onClick={(e)=> deleteJoke(e, jokeInfo._id)} className="btn btn-danger">Delete Joke</button>
            </>
            }
        
        </div>
    );
};

export default OneJoke;