import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button, Link } from "@mui/material";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        location: "Search Place",
        temp: "--",
        feelslike: "--",
        humidity: "--",
        weather: "----"
    })

    let updateInfo = (result) =>{
        setWeatherInfo(result);
    }
    
    return(
        <div>
            <h2>Weather App By&nbsp;<Button href="https://www.instagram.com/mujupatel41/" style={{textTransform: "none", fontSize: "large"}} 
                size="large"  variant="text" color="black" startIcon={<InstagramIcon color="secondary"/>}>@mujupatel41</Button>
            </h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox weatherInfo={weatherInfo} />
        </div>
    )
}