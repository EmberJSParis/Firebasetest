import Ember from 'ember';

export default Ember.Controller.extend({

    show: false,
    actions: {
        pressed(){
            this.toggleProperty('show');
        }
    }

});