var Vue = require('Vue');
var VueTap = require('../vue-tap.js');

Vue.use(VueTap);

new Vue({
    el: '#foo',
    data: {
        time: (new Date()).getTime()
    },
    methods: {
        handler: function(e) {
            this.time = (new Date()).getTime();
        }
    }
});