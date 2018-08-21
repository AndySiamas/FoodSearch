import React, { Component } from 'react';
import Search from './Search.js'
import FoodItemRow from './FoodItemRow.js';
import './App.css';
import $ from 'jquery'; 
import getFoods from './lib/SearchPlaces.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItems: ['hello', 'no']
    }
  }
  
  render() {
    return (
      <div className="App">
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
                crossorigin="anonymous">
          </link>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        </head>
        <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="App-title"> FOOD SEARCH </h1>
                  <div className="row">
                    <div className="col-md-12">
                      <Search />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="foodItems">
                        {this.state.foodItems.map((item) => <FoodItemRow />)}
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
