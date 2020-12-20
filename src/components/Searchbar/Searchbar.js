import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Searchbar({onSearch}){

    const [search, setSearch] = useState('');

    const handleChange = ({target}) => {
       setSearch(target.value)
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        onSearch(search);
    }

    return(
        <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
            <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
            </button>

            <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
            value={search}
            onChange = {handleChange}
            />
        </form>
        </header>
    )
}

Searchbar.defaultProps = {
    onSearch:()=>{}
}
Searchbar.propTypes = {
    onSearch:PropTypes.func
}
