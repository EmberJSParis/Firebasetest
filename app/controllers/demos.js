import Ember from 'ember';

export default Ember.Controller.extend({

    show: false,
    actions: {
        presseddemo(){
            this.toggleProperty('show');
        }
    }

});
