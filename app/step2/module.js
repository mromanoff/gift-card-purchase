define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var View = require('views/step2');
    var controller = {};

    controller.getStep = function () {
        require('entities/step2');
        var fetching = msgBus.reqres.request('equifit:entities');

        //$.when(fetching).then(function (equifits) {
        //var equifit = equifits.get(equifitId);
        // update store model
        //msgBus.commands.execute('store:set', {
        //});

        app.layout.setView('.main-container', new View({
            // model: equifit
        }));

        app.layout.render();
        //});

        //$.when(fetchingEquifits).fail(function (model, jqXHR, textStatus) {
        //    msgBus.commands.execute('equifit:error', model, jqXHR, textStatus);
        //});
    };

    module.exports = controller;
});
