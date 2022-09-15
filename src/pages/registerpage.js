import React from 'react';
import './register.css'

const Registerpage = () => {
    return (
        <div>
            <div className="container">
                <div className="title"> <u>Registration</u></div><br /><br />
                <div className="tab">
                    <h2>
                        <a href="register.html"></a>Student
                    </h2>
                </div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Full Name</span>
                            <input type="text" placeholder="Enter your name" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Username</span>
                            <input type="text" placeholder="Enter your username" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" placeholder="Enter your Email" required />
                        </div>
                        <div className="input-box">
                            <span className="details">ID number</span>
                            <input type="text" placeholder="Enter your ID number" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="text" placeholder="Enter your Password" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Confirm Password</span>
                            <input type="text" placeholder="Confirm your Password" required />
                        </div>
                    </div>
                    <div className="gender-details">
                        <input type="radio" name="Gender" id="dot-1" />
                        <input type="radio" name="Gender" id="dot-2" />
                        <span className="gender-title">Gender</span>
                        <div className="category">
                            <label for="dot-1">
                                <span className="dot one"></span>
                                <span className="gender">Male<br /><br /></span>
                            </label>
                            <label for="dot-2">
                                <span className="dot two"></span>
                                <span className="gender">Female<br /><br /></span>
                            </label>
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Register"/>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Registerpage;