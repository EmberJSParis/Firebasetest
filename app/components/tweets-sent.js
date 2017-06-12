import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
    tweetsSentLookup() {
      var params = {
          clavier: this.get('clavier')
      };
      this.sendAction('tweetsSentLookup', params);
    }
  }

});
