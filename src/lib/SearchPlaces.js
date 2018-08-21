import API_KEYS from './apiKeys.js';
import '../App.js'
import $ from 'jquery'; 

const getFoodItems = (callback) => {
  var url = `https://api.nal.usda.gov/ndb/list`;

  var options = {
    api_key: 'DbUbzkk0HK4zXM89IKXB9Zqvb6wL4U5bIQ6Qz8nQ',
    lt: 'f',
    max: 50,
    start: 0,
    end: 500,
    sort: 'n'
  };

  getFoods(url, options, callback);
}

const getFoodPictures = (query, callback) => {
  var url = `https://api.unsplash.com/search/photos`;

  var options = {
    client_id: '7675446baa2be5640af1b407b133c0f3926c482389743ea034a1f4e4ca6a9b46',
    client_secret: '427ed51526359bd1292d25abe1b5877e1768eee6eec100e0d874e0db127bfa23',
    query: query,
    orientation: 'landscape'
  };

  getFoods(url, options, callback);
}

const getFoods = (endpoint, options, callback) => {

  $.ajax({
    url: endpoint,
    method: 'GET',
    data: options,
    success: function(data) {
      console.log('SUCCESS: ' + data);
      callback(data);
    },
    error: function(data) {
      console.log('ERROR: ' + data);
    }
  });
}
var exported = {};
exported.getFoodItems = getFoodItems;
exported.getFoodPictures = getFoodPictures;

export default exported;