angular.module('services', ['ngResource'])
.factory('fullcontactService', function($resource){
    return {
      query: function (url_params, params) {
        return $resource('https://fullcontact.p.mashape.com/v2/person.json?apiKey=:key&email=:email', url_params, {
          getperson:{
            method:"get",
            headers:{
              'Content-Type': 'application/json',
              'X-Mashape-Key': '<your key here>'
            }
          }
        })
      }
    } 
});
