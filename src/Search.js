import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'; 
import getData from './lib/SearchPlaces.js';
import './Images/magnifier.png';

class Search extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="row">
        <div className="Search">
          <div className="col-mid-6">
            <button className="SearchButton">
              <img className="magnifier" src={require('./Images/magnifier.png')} alt="magnifier-icon"></img>
            </button>
            <input className="SearchBar" type="text"></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;