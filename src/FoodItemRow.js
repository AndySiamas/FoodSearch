import React, { Component } from 'react';
import './App.css';
import './Images/magnifier.png';

class FoodItemRow extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="FoodItemRow">
        <div className="row">
          <div className="col-md-4">
            <p> {this.props.name} </p>
          </div>
          <div className="col-md-4">
            <p> Information goes here </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodItemRow;