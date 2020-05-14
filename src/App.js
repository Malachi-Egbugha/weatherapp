import React,{Component} from 'react';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/weather";

const api_key="6f69111ddfc454f0d4a64903e6e1eb25";

class App extends Component {
  
    state= {
        temperature:undefined,
        city:undefined,
        country:undefined,
        pressure:undefined,
        humidity:undefined,
        description:undefined,
        error:undefined
      
    };
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value; 
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=metric`);
    const data = await api_call.json();
    if(city && country)
    {
      this.setState({
        humidity: data.main.humidity,
        pressure:data.main.pressure,
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        description:data.weather[0].description,
        error:""
            });

    }
    else{
      this.setState({
        humidity: undefined,
        pressure:undefined,
        temperature:undefined,
        city:undefined,
        country:undefined,
        description:undefined,
        error:"Please Enter Your Values"
            });
    }


  }
  render()
  {
    return (
    <div className="App">
      <div className="container">
      <Titles/>
      <Form getWeather={this.getWeather}/>       
       <Weather
        temperature={this.state.temperature}
        pressure={this.state.pressure}
        humidity={this.state.humidity}
        city={this.state.city}
        country={this.state.country}
        description={this.state.description}
        error={this.state.error}
       />
      </div>
      
    
    </div>
  );

  }
  
}




export default App;
