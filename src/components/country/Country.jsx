import './Country.css'
const Country = ({ country }) => {
    console.log(country);
    const { name, flags } = country
    return (
        <div className='country'>
            <img src={flags.png} alt={flags.alt} />
            {/* <img src={flags.svg} alt="" /> */}
            <h3>Name : {name.common}</h3>
            <h5>Official name : {name.official}</h5>
        </div>
    );
};

export default Country;