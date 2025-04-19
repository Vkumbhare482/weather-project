import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './searchbox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error,setError]=useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d67ce81819ee0326dfce739e8952d208";
let getWeatherInfo = async() =>{
    try{
    let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    let result = {
        city:city,
        temp: jsonResponse.main.temp,
        humidity: jsonResponse.main.humidity,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        pressure: jsonResponse.main.pressure,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
}catch(err){
     throw err;
}

};  


let handleChange = (event) => {
    setCity(event.target.value);
}
let handleSubmit = async(event)=>{
    try{ event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await  getWeatherInfo();
        updateInfo(newInfo);
    }catch(err){
       setError(true);
        
    }
    
};
    return(
    <div className="searchbox"> 
       
        <form onSubmit={handleSubmit}>
        <TextField
         id="city"
         label="City Name" 
         variant="outlined" 
         required value={city}
         onChange={handleChange}
         />
        <br></br><br></br><br></br>
        <Button variant="contained" endIcon={<SendIcon />} type="submit">
            Search
        </Button>
        {error && <p style={{color:"red"}}>No such place exists</p>}
        </form>
    </div>)
}
