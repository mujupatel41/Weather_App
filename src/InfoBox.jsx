import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import getWeather from "./WeatherImage";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox ({weatherInfo}){
    return(
        <div className="InfoBox">
            <div className="card-container">
                <Card sx={{ width: 350 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={getWeather(weatherInfo)}
                        title="green iguana"
                        style={{objectFit: "cover"}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {weatherInfo.location}, {weatherInfo.country} &nbsp;
                        {weatherInfo.temp < 15 ? <AcUnitIcon/> :
                            weatherInfo.temp > 15 ? <WbSunnyIcon/> : <ThunderstormIcon/> }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature: <b>{weatherInfo.temp} &deg;C</b></p>
                        <p>Humidity: <b>{weatherInfo.humidity}</b></p>
                        <p>The weather can be described as <b>{weatherInfo.weather}</b> <br /> & <br /> feels like <b>{weatherInfo.feelsLike}&deg;C</b></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}