define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var View = require('views/step1');
    var controller = {};

    controller.getStep = function () {

        require('entities/gift-card');
        var fetching = msgBus.reqres.request('gift-card:entities');
        $.when(fetching).then(function (giftCards) {

            //msgBus.commands.execute('store:set', {
            //    giftCards: giftCards
            //});

            app.layout.setView('.main-container', new View({
                collection: giftCards
            }));

            app.layout.render();
        });

        $.when(fetching).fail(function (model, jqXHR, textStatus) {
            msgBus.commands.execute('equifit:error', model, jqXHR, textStatus);
        });
    };

    module.exports = controller;
});
