define(function (require, exports, module) {
    'use strict';

    var App = require('app');
    var View = require('./view');
    var Module = {};


    Module.init = function () {
        App.layout.setView('.main-container', new View());
        App.layout.render();
    };

    module.exports = Module;
});
