/* Searching For any Place In The World if We Find The Place (city)
We Show weather condition in that Place 
Else if City Don't Exist Show Error Message (" Sorry, This is not a city name ");
*/
const api_key = "755912c70f5c456ab4f141716232002";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
console.log(urlParams.get('city'));
const city = urlParams.get('city');

let weather = {
    api_key : api_key,

    fetch_weather : function(city) {
        fetch(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`)
            .then(res => res.json())
            .then(data => this.display_weather(data))
            .catch(error => {
                document.querySelector('#Error').innerText =  "Sorry, This is not a city name";
            })
    },

    display_weather : function(data){
        const {name, region, country, localtime} = data.location;
        const {text, icon} = data.current.condition;
        const {temp_c, humidity} = data.current;
        const {wind_mph} = data.current;
        console.log(text, name, region, country, localtime, icon, temp_c, humidity, wind_mph);
        document.querySelector('.city').innerText = "Weather in " + name;
        document.querySelector('.date').innerText =  localtime;
        document.querySelector('.country').innerText = country;
        document.querySelector('.region').innerText = region;
        document.querySelector('.temp').innerText = `temp : ${temp_c} C`;
        document.querySelector('.humidity').innerText = `Humidity : ${humidity} %`;
        document.querySelector('.speed').innerText = `Wind: ${wind_mph} km/h`;
        document.querySelector('.weather_condition').src = `https:${icon}`;
        document.querySelector('.condition').innerText = text;
        document.querySelector('.weather_res').classList.remove("loading")
    },

    search : function() {

        const input_value = document.querySelector('.cities').value

        if(input_value === ""){
            return document.querySelector('#Error').innerText = "Empty Input Field !"
        }else{
            document.querySelector('#Error').innerText = ""
        }
        this.fetch_weather(input_value)
        
    }


}

document.querySelector('.search button').addEventListener('click', () =>{
    weather.search();
})

document.querySelector('.cities').addEventListener('keyup', (e) => {
    if(e.key == "Enter" ){
        weather.search();
    }
})

// When the Page Load it Shows automatically Kelibia location 
weather.fetch_weather('Kelibia')





