import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([])
    const [MarkCountry, setMarkCountry] = useState([]) 
    const [flags,setFlag] = useState([])
   
    function handleFlag (flag){
        const NewFlag = [...flags,flag]
        setFlag(NewFlag)
    }

    function handleVisitedCountry (country){
        const NewMarkCountry = [...MarkCountry ,country]
        setMarkCountry(NewMarkCountry)
        // console.log(MarkCountry);
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <>
         <h3>Countries : {countries.length}</h3>
         <div>
         <h5>Marked Country : {MarkCountry.length}</h5>
        {
            MarkCountry.map((country)=><li key={country.cca3}>{country.name.common}</li>)
        }

         </div>

         <div className="ImgContainer">
         {
            flags.map((flag,idx)=><img key={idx} src={flag}></img>)
         }
         </div>

        <div className="container">
            {
                countries.map((country) => <Country key={country.cca3}   country={country} handleVisitedCountry={handleVisitedCountry} handleFlag={handleFlag}></Country>)
            }
           
        </div>
        </>
    );
};

export default Countries;