
import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function MainContainer() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await axios('https://restcountries.com/v3.1/all')
            console.log(response.data);
            setCountries(response.data)
        }
        fetchCountries();
    }, [])



    return (
        <div>
            {countries.map((country) => (
                <div>
                    <img src={country.flags.png} alt={country.name.common}/>
                    <p>{country.name.common}</p>
                </div>
            ))}
        </div>

    )
}
