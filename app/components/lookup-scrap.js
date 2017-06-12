import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    scrapyLookup() {
      var params = {
        scrapy: this.get('scrapy')
      };
      this.sendAction('scrapyLookup', params);
    }
  }
});