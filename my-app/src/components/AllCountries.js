

import React from 'react'

export default function AllCountries(props) {
    const { countries } = props;


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
