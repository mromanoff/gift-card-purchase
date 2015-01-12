define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var View = require('views/step3');
    var controller = {};

    controller.getStep = function () {
        app.layout.setView('.main-container', new View({}));

        app.layout.render();
    };

    module.exports = controller;
});
