import React, { useState, useEffect } from 'react';
import './login.css'
import Logo from '../assets/rgukt.png'
import { firestore } from '../firebase/firebase-utils'

const Loginpage = (props) => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const [students, setstudents] = useState([]);
    const [error, seterror] = useState('');

    useEffect(() => {
        firestore.collection('Students').get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setstudents([...students, doc.data()])
                })
            })
    }, []);

    const loginUser = (e) => {
        e.preventDefault()
        let student = students.filter((s) => s.username === username && s.password === password)
        if (student.length !== 0) {
            seterror('')
            props.history.push('/')
            alert('Logged in successfully')
        } else {
            seterror('Invalid username/password')
        }
    }

    return (
        <div>
            <div className="login">
                <div>
                    <img alt="logo" src={Logo} height="250px" />
                    <h3 style={{ marginBottom: '50px', color: '#000' }}><b> <br /> <br />AN APPROACH TO TEST STUDENT KNOWLEDGE</b></h3>
                </div>

                <div className="main" style={{ right: '10px', bottom: '80px' }}>
                    <p id="sign" align="center"> Student Sign in</p>
                    <form className="form1">
                        <input className="un " type="text" align="center" placeholder="Username" onChange={(e) => setusername(e.target.value)} /><br />
                        <input className="pass" type="password" align="center" placeholder="Password" onChange={(e) => setpassword(e.target.value)} /><br />
                        <p style={{ color: 'tomato', fontSize: '16px', textAlign: 'center', marginBottom: '20px' }}>{error}</p>
                        <div className="button">
                            <center>
                                <input type="submit" value="Sign in " onClick={(e) => loginUser(e)} style={{ cursor: 'pointer', marginBottom: '20px' }} />
                                <p style={{ fontSize: 'medium', color: '#000000' }}>Don't have an account? <span onClick={() => { props.history.push('/register') }} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Signup</span></p>
                            </center>
                        </div>


                    </form>
                </div>
            </div>
        </div >
    );
};

export default Loginpage;