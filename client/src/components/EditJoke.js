import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router';

const EditJoke = (props) => {

    const [formInfo, setFormInfo] = useState({
        writtenBy: "",
        content: ""
    })
    
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/jokes/${props.jokeId}`)
            .then(response => {
                console.log("****** response from create api after submitting form")
                console.log(response)
                console.log("****** response from create api after submitting form")
                setFormInfo(response.data.results)
            })
            .catch(err => console.log(err))
    })

    const changeHandler = (e) => {
        console.log("changing the input")
        console.log(e.target.value)
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("getting ready to submit this joke", formInfo)
        axios.put(`http://localhost:8000/api/jokes/update/${props.jokeId}`, formInfo)
            .then(response => {
                console.log("just updated")
                console.log(response)
                navigate("/jokes")
            })
            .catch(err => console.log(err))
        
    }


    return (
        <div>
        <h1 className="text-info mb-5">Edit the Joke:</h1>
        <form onSubmit={submitHandler}>
            <p>Written By: <input type="text" name="writtenBy" onChange={changeHandler} value={formInfo.writtenBy}/></p>
            <p>Joke: <textarea name="content" id="" cols="30" rows="10" onChange={changeHandler} value={formInfo.content}></textarea></p>
            {/* <p><input type="date" name="" onChange={changeHandler}/></p> */}
            <p><input type="submit" value="Create Joke"/></p>
        </form>
            
        </div>
    );
};


export default EditJoke;