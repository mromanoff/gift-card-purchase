define(function (require, exports, module) {
    'use strict';

    var App = require('app');
    var View = require('./view');
    var Collection = require('./collection');
    var spinner =  require('../common/spinner/module');
    var Module = {};



    Module.init = function () {
        var collection  = new Collection();

        spinner.show();
        collection.fetch().then(function(){

            App.layout.setView('.main-container', new View({
                collection: collection
            }));
            App.layout.render();
            spinner.hide();
        });
    };

    module.exports = Module;
});
