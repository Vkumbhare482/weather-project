import SearchBox from "./searchbox"
import InfoBox from "./InfoBox"
import { useState } from "react";




export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 50,
        humidity: 60,
        temp: 48,
        minTemp: 40,
        maxTemp: 49.5,
        weather:"haze",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    };


    return (
        <div style={{ textAlign: "center" }}>
            <h2>weather app by vaibhav!</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}
