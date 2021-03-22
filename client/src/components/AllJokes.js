import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AllJokes = () => {
    const [allJokes, setAllJokes] = useState([])

    useEffect(() =>{
        axios.get("http://localhost:8000/api/jokes/all")
            .then(alldata =>{
                console.log("******")
                console.log(alldata)
                console.log("******")
                setAllJokes(alldata.data.results)
            })
            .catch()



    }, [])

    return (
        <div>
            <h1>Welcome to the fun page!</h1>
            {
                allJokes.map((jokeObj, idx) =>{
                    return <div>
                        <h3>Joke is by: {jokeObj.writtenBy}</h3>
                        <p>Joke: {jokeObj.content}</p>
                    </div>
                }
            )}
        </div>
    );
};

export default AllJokes;