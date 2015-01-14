define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');


    // Defining the application router.
    module.exports = Backbone.Router.extend({

        routes: {
            '': 'step1',
            'step2': 'step2',
            'step3': 'step3',
            'error': 'errorPage'
        },

        step1: function () {
            console.log('route get step1:');
            var Step1Module = require('./step1/module');
            Step1Module.init();
        },

        step2: function () {
            console.log('route get step2:');
            var Step1Module = require('./step2/module');
            Step1Module.init();
        },

        step3: function () {
            console.log('route get step3:');
            var Step1Module = require('./step3/module');
            Step1Module.init();
        }
    });
});
