import React ,{useState} from 'react';

const api = {
  keyid:"5ea693cf0450bdc66b3f7684afdfb9bc",
  weatherlink:"https://api.openweathermap.org/data/2.5/weather"
  }



function App() {

 
      const[query ,setQuery]=useState('');
      
     const [weather , setWeather]=useState({});

     const search = evt => {
       console.log("search function"+evt.key);
              
       if(evt.key === "Enter"){
       console.log("query"+query);
       console.log(`${api.weatherlink}?q=${query}&units=metrics&appid=${api.keyid}`);
             fetch(`${api.weatherlink}?q=${query}&units=metrics&appid=${api.keyid}`)
              .then(res => res.json())
              .then(body => {
                console.log(body)
                 setWeather(body);
                 setQuery('');
                  console.log(weather);
                });//then
       } //if
             

     }//search

        const dateBuilder= (d)=>{""
          let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
          let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

          let day = days[d.getDay()];
          let month = months[d.getMonth()];
          let year = d.getFullYear();
          let date = d.getDate();
          return [day ,date ,month ,year];
        }  

  return (
    <div className="app">
    <main>
           <div className="search-box">

           <input tpe="text"
            className="search-bar"
            value={query}
            onChange={e=> setQuery(e.target.value)}
            onKeyPress={ e=> (e.key === 'Enter')? search (e):null}

            />
            
           </div>
           <div className="location-box">
           <div className="location">
            {weather?weather.name:null}{weather.main === undefined ?null :weather.sys.country}
           <div className="date">{dateBuilder(new Date())}</div>
           </div>

            <div className="weather-box">
            <div className ="temp">
            {weather.main === undefined ?null : Math.round(weather.main.temp)}
             *c

            </div>


            </div>

             
              

           </div>
    </main>
      
    </div>
  );
}

export default App;
