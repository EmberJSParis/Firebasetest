import Ember from 'ember';

export default Ember.Route.extend({
    redirect: function() {
     window.location.replace("http://artadys.fr");
  }
});
