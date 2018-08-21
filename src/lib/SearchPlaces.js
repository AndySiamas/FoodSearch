import API_KEYS from './apiKeys.js';
import '../App.js'
import $ from 'jquery'; 

const getFoods = (callback) => {
  var options = {
    api_key: 'DbUbzkk0HK4zXM89IKXB9Zqvb6wL4U5bIQ6Qz8nQ',
    lt: 'f',
    start: 0,
    end: 10,
    sort: 'n'
  };

  $.ajax({
    url: `https://api.nal.usda.gov/ndb/list`,
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

export default getFoods;