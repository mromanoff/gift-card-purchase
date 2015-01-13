define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');
   // var msgBus = require('msgbus');
    var Step1Controller = require('./controllers/step1');

    // Defining the application router.
    var Router = Backbone.Router.extend({

        routes: {
            '': 'step1',
            'step2': 'step2',
            'step3': 'step3',
            'error': 'errorPage'
        },

        step1: function () {
            console.log('route get step1:');
            Step1Controller.getStep();
        },

        step2: function () {
            console.log('route get step2:');
            //msgBus.commands.execute('step2:get');
        },

        step3: function () {
            console.log('route get step3:');
            //msgBus.commands.execute('step3:get');
        },

        errorPage: function () {
            console.log('route error');
            //msgBus.commands.execute('error:get');
        }
    });

    module.exports = Router;
});
