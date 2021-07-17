import React from 'react';


function Graph(props) {
  
    return (
        <div className="graph">
            <h2 className="graph__temperature">Temperature</h2>
            <div className="graph__data">

            </div>
            <div className="week">
                <div className="day">
                    <p className="day___name">Today</p>
                    <img className="day___weather-graph"/>
                    <p className="humidity__name humidity__name_day">Humidity</p>
                    <p className="humidity__percent humidity__percent_day">30%</p>
                </div>

            </div>
        </div>

    );

}
export default Graph;