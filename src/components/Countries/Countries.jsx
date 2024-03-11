import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([])
    // const [country, setCountry] = useState([]) 
  
    function handleVisitedCountry (country){
        console.log(country);
        console.log("visited");
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <>
         <h3>Countries : {countries.length}</h3>
        <div className="container">
            {
                countries.map((country) => <Country key={country.cca3}   country={country} handleCountry={handleVisitedCountry}></Country>)
            }
        </div>
        </>
    );
};

export default Countries;