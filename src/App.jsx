import React from "react";
import characters from "./characters";
import "./App.css";

export default function App() {
    const [firstPassword, setFirstPassword] = React.useState("");
    const [secondPassword, setSecondPassword] = React.useState("");

    function getRandomString(length) {
        let newRandomString = [];
        for (let i = 0; i < length; i++) {
            let randomNumber = Math.floor(Math.random() * characters.length);
            newRandomString.push(characters[randomNumber]);
        }
        return newRandomString.join("");
    }

    function handleClick() {
        setFirstPassword(getRandomString(10));
        setSecondPassword(getRandomString(10));
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
            <button onClick={handleClick}>Generate passwords</button>

            <div className="password-container">
                <p className="first-password">{firstPassword}</p>
                <p className="second-password">{secondPassword}</p>
            </div>
        </div>
    );
}
