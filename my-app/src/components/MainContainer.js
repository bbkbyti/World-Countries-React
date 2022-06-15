

import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';


import AllCountries from './AllCountries';
import FilterCountriesByContinent from './FilterCountriesByContinent';


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
            <Routes>
                {/* <FilterCountriesByContinent countries={countries} /> */}
                <Route exact path='/' element={<AllCountries countries={countries} />} />
            </Routes>
        </div>

    )
}
