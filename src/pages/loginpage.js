import React from 'react';
import './login.css'
import Logo from '../assets/rgukt.png'

const Loginpage = () => {
    return (
        <div>
            <div className="nav">
                <div style={{ left: '400px', height: '270px' }}>
                    <img src={Logo} height="200px" />
                    <h3 style={{ marginBottom: '50px' }}><b> <br /> <br />AN APPROACH TO TEST STUDENT KNOWLEDGE</b></h3>
                </div>

                <div className="main" style={{
                    right: '10px', bottom: '80px'
                }}>
                    <p id="sign" align="center" style={{ right: '45px' }}> Student Sign in</p>
                    <form className="form1">
                        <input className="un " type="text" align="center" placeholder="Username" /><br />
                        <br /><input className="pass" type="password" align="center" placeholder="Password" />
                        <br /><br /><a className="submit" align="center">
                            <h3>Sign in </h3>
                        </a>
                        <br /><br />
                        <p className="forgot" align="center"><a href="#" style={{ position: 'relative', top: '30px', left: '10px' }}>Forgot Password?
                        </a></p>
                        <br /> <br />
                        <p className="a" align="center">
                            <a href="register.html" style={{ fontWeight: '700', position: 'relative', top: '60px', left: '20px' }}>
                                <h4> Don't have account? <u>SignUp</u></h4></a></p>


                        <div className="wel" style={{ marginTop: '400px', marginLeft: '150px' }}>

                            <h1 style={{ position: 'relative', bottom: '20px' }}> </h1>
                        </div>

                    </form>
                </div>
            </div>
        </div >
    );
};

export default Loginpage;