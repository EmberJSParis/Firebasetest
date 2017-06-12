import Ember from 'ember';

export default Ember.Route.extend({


	actions: {
    tweetsSentLookup(params) {
      this.transitionTo('getTweetsSentResult', params.clavier);
    }
    
  },

  model: function(params) {
   var url = 'https://artadysapi.herokuapp.com/tweetsSentapi?key=' + params.clavier;
   return Ember.$.getJSON(url).then(function(responseJSON) {
    
     return responseJSON.results;
   });

  }


});
