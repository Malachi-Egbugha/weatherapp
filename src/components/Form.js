import React from 'react';


const Form = (props) => (
        
        <form onSubmit={props.getWeather}>
             <div className="form-group row">
             <div className="col-md-3"></div>
            <div className="col-md-6">
            <input type="text" className="form-control" name="city" placeholder="City"/>
            </div>
            <div className="col-md-3"></div>
            </div>
            <div className="form-group row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <input type="text" className="form-control" name="country" placeholder="Country"/>
            </div>
            <div className="col-md-3"></div>
            </div>
            <div className="form-group row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <button className="btn btn-primary btnstyle">GET WEATHER</button>
            </div>
            <div className="col-md-3"></div>
            </div>
        </form>
        
            
        
        );
    

export default Form;