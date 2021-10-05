import React, { Component } from 'react'
import PropTypes from 'prop-types'


function SearchRobot({searchField,searchChange}) {
    return (
        <div>
                <input className="ma2 pa1" type="search" placeholder="Search any things"  onChange={searchChange} />
                <button className='pa1 ma2'> Search</button>
        </div>

    );
    
}
export default SearchRobot;