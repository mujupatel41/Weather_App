import { Button, TextField, Alert } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import  "./SearchBox.css";
import { useState } from "react";
import getWeatherInfo from "./GetWeatherInfo";

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let handleInput = (event) =>{
        setCity(event.target.value)
    }

    let handleSubmit = async (e) =>{
        try{
            e.preventDefault();
            setCity("");
            let info = await getWeatherInfo(city);
            updateInfo(info);
        } catch(err){
            setError(true)
        }
        
    }
    
    return(
        <div className="SearchBox">
            <div className="alert">
            {error && <Alert severity="error">No such place exists!</Alert>}

            </div>
            
            <form>
            <TextField required id="city" onChange={handleInput} 
            value={city} label="City Name" variant="standard" /><br /><br />

                <Button onClick={handleSubmit} endIcon={<SearchIcon />}
                 variant="contained" type="submit" size="small">Search</Button>
            </form>
            
        </div>
    )
}
