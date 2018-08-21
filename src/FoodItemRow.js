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
        <p> FOOD ITEM </p>
      </div>
    );
  }
}

export default FoodItemRow;