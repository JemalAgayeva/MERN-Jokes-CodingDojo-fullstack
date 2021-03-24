import React, {useState} from 'react';
import {navigate} from '@reach/router'
import axios from 'axios';


const CreateJoke = () => {

const [formInfo, setFormInfo] = useState({
    writtenBy: "",
    content: ""
})

const [errors, setErros] = useState({})

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
    axios.post("http://localhost:8000/api/jokes/create", formInfo)
        .then(response => {
            console.log("****** response from create api after submitting form")
            console.log(response)
            console.log("****** response from create api after submitting form")   
            if(response.data.results){
            navigate("/jokes")
            }
            else{
                setErros(response.data.errors)
            }
        })
        .catch(err => console.log(err))
}


    return (
        <div>
            <h1 className="text-info mb-5">Add your New Joke:</h1>
            <form onSubmit={submitHandler}>
                <p className="text-danger">{errors.writtenBy? errors.writtenBy.message: ""}</p>
                <p>Written By: <input type="text" name="writtenBy" onChange={changeHandler}/></p>
                <p className="text-danger">{errors.content? errors.content.message: ""}</p>
                <p>Joke: <textarea name="content" id="" cols="30" rows="10" onChange={changeHandler}></textarea></p>
                {/* <p><input type="date" name="" onChange={changeHandler}/></p> */}
                <p><input type="submit" value="Create Joke"/></p>
            </form>
        </div>
    );
};


export default CreateJoke;