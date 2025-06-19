let API_URL = "http://api.weatherapi.com/v1/current.json";
let API_KEY = import.meta.env.VITE_MY_SECRET;
console.log(API_KEY)

let getWeatherInfo = async (city) =>{
    try{
        let response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}`);
        let data = await response.json();
        let result = {
            location: data.location.name,
            country: data.location.country,
            temp: data.current.temp_c,
            humidity: data.current.humidity,
            feelsLike: data.current.feelslike_c,
            weather: data.current.condition.text,
        }
        return result;
    } catch(err){
        throw err;
    }
    
}

export default getWeatherInfo;