import React, { Component } from 'react';
import Search from './Search.js'
import FoodTable from './FoodTable.js';
import './App.css';
import $ from 'jquery'; 
import getData from './lib/SearchPlaces.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItems: []
    }
  }

  componentDidMount() {
    getData.getFoodItems(this.getFoodItems.bind(this))
  }

  getFoodItems(items) {
    var allFoods = items.list.item;
    var app = this;
    allFoods.forEach(function (food) {
      app.createNewFoodItem(food.name, null);
    });
  }

  createNewFoodItem(name, image) {
    var food = {};
    food.name = name;
    food.image = image;
    
    var currentFoodItems = this.state.foodItems;
    currentFoodItems.push(food);
    this.setState({foodItems: currentFoodItems});
  }
  
  render() {
    return (
      <div className="App">
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
                crossorigin="anonymous">
          </link>
          <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        </head>
        <div className="container">
            <div className="row">
              <div className="col-md-10">
                <h1 className="App-title"> FOOD SEARCH </h1>
                  <div className="row">
                    <div className="col-md-12">
                      <Search />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <FoodTable foodItems={this.state.foodItems}/>
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
