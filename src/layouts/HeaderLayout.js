import React from 'react';
import { Link } from "react-router-dom";

export default class HeaderLayout extends React.Component {
    render() {
        return (
            <header>
                <Link to="/">
                    <div className="weather-icon">
                        <img src="weather.png" alt=""/>
                    </div>
                </Link>
                <p className="bold">The best Weather App we ever made</p>
                <Link to="/settings">
                    <div className="settings-icon">
                        <img src="settings.png" alt=""/>
                    </div>
                </Link>
            </header>
        )
    }
}