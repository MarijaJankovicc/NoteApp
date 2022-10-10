import React from "react";

export function Header({ handleToggleDarkMode }) {
    return (
        <div className="header">
            <h1><span className="first-word">React </span><span>Notes</span></h1>
            <button className="btn" onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}>Toggle Mode</button>
        </div>
    );
}