import React, { useState } from 'react'
import {useCookies} from 'react-cookie'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

const Dictionary = () => {
    const [cookie, setCookie] = useCookies(['Token'])
    const [word, setWord] = useState();
    const [meaning, setMeaning] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('http://127.0.0.1:8000/api/dictionary/', {
            params : {
                word: word.toLowerCase()
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${cookie.Token}`
            },
        })
        .then(res => {setMeaning(res.data[0].meaning); console.log(res.data[0])}).catch(err => console.log(err))

    }


    return(
        <div className="container my-4">
            <div className="text-center">
                <h3>Dictionary App</h3>
            </div><br/>
            <form>
                <input type="text" onChange={e => setWord(e.target.value)} id="word" className="form-control" name="word" placeholder="Enter Word" required />
                <div className="my-3 text-center">
                    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
            <div className="container my-3">
                <div>
                    <p><b>{meaning}</b></p>
                </div>
            </div>
        </div>
    )
}

export default Dictionary;