import React from 'react';


const Weather= (props) => (
    
       <div className="row weather">
               <div className="col-md-3"></div>
               <div className="col-md-6">{props.city && props.country && <p className="lead"><span className="weatherlocation"> {props.city}, {props.country}</span></p>}</div>
               <div className="col-md-3"></div>
               <div className="col-md-3"></div>
               <div className="col-md-6"> {props.temperature && <p className="lead"><span className="weathertemp"> {props.temperature} <sup>o</sup>C</span></p>}</div>
               <div className="col-md-3"></div>
               <div className="col-md-3"></div>
               <div className="col-md-6">{props.pressure && <p className="lead"><span className="weatherhead">Pressure: {props.pressure}</span></p>}</div>
               <div className="col-md-3"></div>
               <div className="col-md-3"></div>
               <div className="col-md-6">{props.description && <p className="lead"><span className="weatherhead">Conditions: {props.description}</span></p>}</div>
               <div className="col-md-3"></div>
               <div className="col-md-3"></div>
               <div className="col-md-6">{props.humidity && <p className="lead"><span className="weatherhumidity">Humidity: {props.humidity}</span></p>}</div>
               <div className="col-md-3"></div>
               <div className="col-md-3"></div>
               <div className="col-md-6">{props.error && <p className="lead">{props.error}</p>}</div>
               <div className="col-md-3"></div>
            </div>
    );



export default Weather;