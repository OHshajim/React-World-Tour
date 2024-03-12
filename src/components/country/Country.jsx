import { useState } from 'react';
import './Country.css'
const Country = ({ country ,handleVisitedCountry,handleFlag}) => {
    // console.log(country);
    const { name, flags ,population,area ,cca3 } = country
    const [visit,setVisit] = useState(false)
    function handleVisit (){
        setVisit(!visit)
    }
 
    // console.log(handleVisitedCountry);
    return (
        <div className={`country ${visit&&'visited'}`}>
            <img src={flags.png} alt={flags.alt} />
            {/* <img src={flags.svg} alt="" /> */}
            <h3>Name : {name.common}</h3>
            <h5>Official name : {name.official}</h5>
            <p>Population : {population} peoples</p>
            <p>Area : {area} Kilometer <sup>2</sup></p>
            <p>Code : {cca3}</p>
            <button  className={'btn'} onClick={()=>handleVisitedCountry(country) }> Mark to visit </button>
            <br />
            <button  className={'btn'}  onClick={()=>handleFlag(country.flags.png) }> Flag </button>
            <br />
            <button onClick={handleVisit }>{visit? 'Visited':'visit'}</button>
        </div>
    );
};

export default Country;