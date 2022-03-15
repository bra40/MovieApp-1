import React, { Component } from "react";




export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up Form</h3>
                <div >
                    <button type ="go back" className = "go-back-button"> Return</button>
                </div>
                <div className="form-name">
                    <label>First name</label>
                    <input type="text" className="form-name" placeholder="First name" />
                </div>
                <div className="form-last-name">
                    <label>Last name</label>
                    <input type="text" className="form-last-name" placeholder="Last name" />
                </div>
                <div className="form-email-adress">
                    <label>Email address</label>
                    <input type="email" className="form-email-adress" placeholder="Enter email" />
                </div>
                <div className="form-password">
                    <label>Password</label>
                    <input type="password" className="form-password" placeholder="Enter password" />
                </div>
                <div className="form-password-match">
                    <label>Enter Password Again</label>
                    <input type="password" className="form-password-match" placeholder="Enter password" />
                </div>
                <button type="submit" className="submit-button">Sign Up</button>
                <p className="forgot-password text-right">
                    Already have an account? <a href="#">sign in</a>
                </p>
            </form>
        );
    }
}