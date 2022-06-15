

import React, { useState } from 'react';

import classes from './AllCountries.module.css'


export default function AllCountries(props) {
    const [userSearch, setUserSearch] = useState('')
    const { countries } = props;

    const handleChange = (e) => {
        setUserSearch(e.target.value);
    }

    return (
        <div className={classes.countries}>
            <div>
                <form>
                    <input
                        type='text'
                        placeholder='Search country by name...'
                        value={userSearch}
                        onChange={handleChange}
                    />
                </form>
            </div>
            {countries.filter((country) => {
                if (userSearch === '') {
                    return country
                } else if (country.name.common.toLowerCase().includes(userSearch.toLowerCase())) {
                    return country
                }
            }).map((country) => (
                <div 
                    key={country.name.common}>
                    <img src={country.flags.png} alt={country.name.common} />
                    <h4>{country.name.common}</h4>
                </div>
            ))}
        </div>

    )
}

