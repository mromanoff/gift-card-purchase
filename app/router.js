define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');
    var Step1Module = require('./step1/module');
    var Step2Module = require('./step2/module');
    var Step3Module = require('./step3/module');


    // Defining the application router.
    module.exports = Backbone.Router.extend({

        routes: {
            '': 'step1',
            'step2': 'step2',
            'step3': 'step3',
            'error': 'errorPage'
        },

        step1: function () {
            Step1Module.init();
        },

        step2: function () {
            Step2Module.init();
        },

        step3: function () {
            Step3Module.init();
        }
    });
});
