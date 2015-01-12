define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var Wreqr = require('backbone.wreqr');

    var msgBus = {
        reqres: new Wreqr.RequestResponse(),
        commands: new Wreqr.Commands(),
        events: new Wreqr.EventAggregator()
    };

    // event name
    // {what}:{command}

    /***
     * Get Step1 Page
     */
    msgBus.commands.setHandler('step1:get', function(){
        require(['./controllers/step1'], function (controller) {
            module.exports = controller.getStep();
        });
    });

    /***
     * Get Step2 Page
     */
    msgBus.commands.setHandler('step2:get', function(){
        require(['controllers/step2'], function (controller) {
            controller.getStep();
        });
    });

    /***
     * Get Step3 Page
     */
    msgBus.commands.setHandler('step3:get', function(){
        require(['controllers/step3'], function (controller) {
            controller.getStep();
        });
    });

    /***
     *  Get Error Page
     */
    msgBus.commands.setHandler('error:get', function(model, jqXHR, textStatus){
        require(['controllers/error'], function (controller) {
            controller.init(model, jqXHR, textStatus);
        });
    });

    /***
     * Helper Event triggers
     * @type {Object}
     */
    msgBus.commands.setHandler('scroll:top', function () {
        require(['controllers/helper'], function (controller) {
            controller.scrollTop();
        });
    });

    /***
     * Set Data Storage
     */
    msgBus.commands.setHandler('store:set', function(options){
        app.store.set(options);
    });

    /***
     * Get Data Storage
     */

    //msgBus.reqres.setHandler('store:get', function (attribute) {
    //    console.log('get store property', attribute);
    //    return app.store.get(attribute);
    //});

    /***
     * Show loading view
     */
    msgBus.commands.setHandler('loading:show', function(options){
        require(['controllers/loading'], function (controller) {
            controller.show(options);
        });
    });

    /***
     * Hide loading view
     */
    msgBus.commands.setHandler('loading:hide', function(){
        require(['controllers/loading'], function (controller) {
            controller.hide();
        });
    });

    module.exports = msgBus;
});