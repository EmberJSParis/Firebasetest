import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement(){
        this._super(...arguments);
        this.$('#blah').hide().fadeIn('0');
    }
});