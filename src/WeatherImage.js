let sunnyWeather = "https://media.istockphoto.com/id/1200224188/photo/white-clouds-and-sun-in-blue-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=aLitgwfI8yTWUyHX8B80_w2MUsg8f8ieKmkk1UyMziM=";
let overcastWeather = "https://plus.unsplash.com/premium_photo-1664004039791-941799850992?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3ZlcmNhc3QlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
let mistWeather = "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.jpg?s=2048x2048&w=is&k=20&c=cCOvNPeMW0rmwOpC9EDhiIo48OaiZ3uld_tEoniRLkE=";
let hazeWeather = "https://images.unsplash.com/photo-1604424288891-7f0871867e09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGF6ZSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
let rainWithThunder = "https://plus.unsplash.com/premium_photo-1674684223891-5340fdb15256?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UGF0Y2h5JTIwbGlnaHQlMjByYWluJTIwd2l0aCUyMHRodW5kZXIlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
let partlyCloud = "https://images.unsplash.com/photo-1495756111155-45cb19b8aeee?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let clearWeather = "https://media.istockphoto.com/id/824800468/photo/sun-on-blue-sky-with-clouds.jpg?s=2048x2048&w=is&k=20&c=5No3BcKfNJFsYjjHzDJTtvmymIfXjvJKveF9ufOvEj0=";
let lightSnow = "https://plus.unsplash.com/premium_photo-1726994887025-b91b0362b297?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let fog = "https://media.istockphoto.com/id/1163968623/photo/commuters-cars-drive-through-fog-on-city-street-at-twilight.jpg?s=2048x2048&w=is&k=20&c=j92TRu6mBnAfEw5p4xnG6sX5szQJqJNxz2uZY8pFF5A=";


let getWeather = (weatherInfo) => {
    if(weatherInfo.weather == "Sunny"){
        return sunnyWeather;
    } else if(weatherInfo.weather == "Mist"){
        return mistWeather;
    } else if(weatherInfo.weather == "Haze"){
        return hazeWeather;
    } else if(weatherInfo.weather == "Partly cloudy"){
        return partlyCloud;
    } else if(weatherInfo.weather == "Clear"){
        return clearWeather;
    } else if(weatherInfo.weather == "Light rain shower"){
        return rainWithThunder;
    } else if(weatherInfo.weather == "Light rain shower"){
        return rainWithThunder;
    } else if(weatherInfo.weather == "Light snow"){
        return lightSnow;
    } else if(weatherInfo.weather == "Overcast"){
        return overcastWeather;
    } else if(weatherInfo.weather == "Fog"){
        return fog;
    } else if(weatherInfo.weather == "Light freezing rain"){
        return lightSnow;
    }
     else{
        return sunnyWeather;
    }
}

export default getWeather;