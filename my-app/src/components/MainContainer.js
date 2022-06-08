
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import AllCountries from './AllCountries';

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
            <AllCountries countries={countries} />
        </div>

    )
}
