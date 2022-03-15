import React, { Component } from "react";
export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Sign In</h3>
                <div >
                    <button type ="go back" className = "go-back-button"> Return</button>
                </div>
                <div className="form-email">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-password">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-remember-me">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="sign-in-button">Sign in</button>
                <p className="forgot-password">
                    Forgot <a href="#">password?</a>
                </p>
                <p className="sign-up-link">
                    Don't have an account yet? <a href="#">Click here!</a>
                </p>
            </form>
        );
    }

    
}