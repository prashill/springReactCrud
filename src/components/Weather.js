import React, {useState, useEffect} from 'react'
import "./weatherstyle.css"
const Weather = () => {
    const [city, setCity] = useState();
        const [search, setSearch] = useState("New York");

        useEffect(()=>{
            document.title = "Weather || Get weather info by search";
            const fetchApi = async ()=>{
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=548be1781fa0f8d667478fdec78ce601`
                    const response = await fetch(url)
                    const resJson = await response.json();
                    setCity(resJson.main );
           
                    console.log(resJson);
            }
            

            fetchApi();
        },[search])
    return (
        <div className="box">
        <div className="inputData">
            <input 
            type="search" 
            placeholder="Searh..." 
            onChange={(e)=>{
                    setSearch(e.target.value);
            }} 
            className="inputField" />
        </div>
    
            {
                !city ? (
                    <p>No dara Found</p>
                ):(
                <div>
                    <div className="info">
                        <h1 className="location">
                        <i className="fas fa-street-view"></i> {search}
                        </h1>
                            <br/>
                        <h2 className="temp">
                        {city.temp}°Cel
                        </h2>
                        <h3 className="tempmin_max"> Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel</h3>
                    
                    </div>
                 </div>
                )
            }
    

           
    </div>
    )
}

export default Weather
