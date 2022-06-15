import React, { useState } from 'react'

export default function FilterCountriesByContinent(props) {
    const [ continents, setContinents ] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([]);

    const { countries } = props;

    // const countriesFiltered = countries.filter((country) )

    return (
        <div>
            <form>
                <label htmlFor='sort'></label>
                <select>
                    <option value='Filter by Region'></option>
                    <option value='Africa' ></option>
                    <option value='Asia'></option>
                    <option value='America'></option>
                    <option value='Europe'></option>
                    <option value='Oceania'></option>
                </select>
            </form>

        </div>
    )
}
