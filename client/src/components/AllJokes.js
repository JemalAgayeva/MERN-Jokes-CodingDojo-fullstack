import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from '@reach/router'

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
            <h1 className="text-info mb-5">Welcome to the fun page!</h1>
            {
                allJokes.map((jokeObj, idx) =>{
                    return <div>
                        <h3 className="text-primary">Joke is by: {jokeObj.writtenBy}</h3>
                        <p>Joke: {jokeObj.content}</p>
                        <button className="btn btn-secondary"><Link className="text-light" to={`/jokes/info/${jokeObj._id}`}>View More Details</Link></button>
                        <hr className="col-sm-2 mx-auto" />
                    </div>
                }
            )}
        </div>
    );
};

export default AllJokes;