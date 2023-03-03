import React from "react";
import characters from "./characters";
import "./App.css";

export default function App() {
    function getString() {
        return characters.join("");
    }

    return (
        <div className="app">
            <header>
                <h2 className="title">
                    <span>Generate a </span>
                    <br /> random password
                </h2>
                <h3 className="subtitle">
                    Never use an insecure password again.
                </h3>
            </header>
            <button>Generate passwords</button>

            <div className="password-container">
                <p className="first-password"></p>
                <p className="second-password"></p>
            </div>
        </div>
    );
}
