import React from "react";
import "./App.css";
import Phone from "./design/iPhone Mockup.png"

function App() {
    return (
        <div className="container">
            <div className="first-box">
                <h1>Gradie</h1>
                <p>Beautiful gradients in seconds.</p>
                <div className="phone-box">
                    <img src={Phone} className="phone-img"/>
                </div>
            </div>
            <div className="second-box">
                <h1>Login</h1>
                <form>
                    <div className="form-box">
                        <h2>Email</h2>
                        <input type="email" placeholder="john@example.com"/>
                    </div>
                    <div className="form-box">
                        <h2 type="password">Password</h2>
                        <input
                            type="password"
                            placeholder="At least 8 characters"
                        />
                    </div>
                    <div className="checkbox-box">
                        <input type="checkbox" className="checkbox-round"/>
                        <label>By creating an account, you agree to the <a href="#">Terms &
                            Conditions.</a></label
                        >
                    </div>
                    <div className="form-box">
                        <input type="submit" className="form-btn" value="Create an Account"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
