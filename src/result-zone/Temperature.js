import React from 'react';


function Temperature(props) {
  
    return (
        <div className="temperature">
            <p className="date">5:05 PM, Mon, Nov 23, 2020</p>
            <img className="temperature_image"/>
            <h1 className="degrees">72 F</h1>
            <h2 className="weather-kind">Cloudy</h2>
            <div className="humidity-wind-speed">
                <div className="humidity">
                    <p className="humidity__name">Humidity</p>
                    <p className="humidity__percent">45%</p>
                </div>
                <div className="wind-speed">
                    <p className="wind-speed__name">Wind speed</p>
                    <p className="wind-speed__numbers">19.2 km/j</p>
                </div>
            </div>
        </div>

    );

}
export default Temperature;