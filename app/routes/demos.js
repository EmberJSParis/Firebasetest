import Ember from 'ember';


export default Ember.Route.extend({
  actions: {
    scrapyLookup(params) {
      this.transitionTo('scrapyresults', params.scrapy);
    }
  }
});