import Ember from 'ember';

export default Ember.Route.extend({

model: function(params) {
   
var url = 'https://arsearch.herokuapp.com/searchengineAPI?url=' + params.scrapy;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return (responseJSON);
   });
  }









});