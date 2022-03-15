import React, { Component } from "react";
import "./landingpage.scss"

export default class LandingPage extends Component {
    render() {
        return (
            <form>
                <h1>Film Forum</h1>
                <div >
                <input type="text" id="header-search" placeholder="Search for Movie Graphs" name="s"/>  
                <button type="submit">Search!</button>

                    <button type ="click" className = "go-to-login-button"> Log in</button>
                    <button type ="click" className = "go-to-signup-button"> Sign up</button>
                    <button type ="click" className = "go-to-user-page-button"> Profile</button>   
                </div>

            </form>
            );
        }
    }