import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap';

const Signup = () => {

    const [signupDetails, setsignupDetails] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [allData, setallData] = useState([])

    return (
        <div>

            <form >
                <input type='text'placeholder='Name'/>
                 <input type='email'placeholder='Email'/>
                 <input type='password'placeholder='Password'/>
<Button>Signup</Button>
            </form>

        </div>
    )
}

export default Signup
