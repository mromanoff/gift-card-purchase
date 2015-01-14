define(function (require, exports, module) {
    'use strict';

    var App = require('app');
    var View = require('./view');
    var Collection = require('./collection');
    var Module = {};

    Module.init = function () {
        var collection  = new Collection();

        collection.fetch().then(function(){

            //App.useLayout().setView({
            //        // Attach the root content View to the layout.
            //        '.main-container': new View({
            //            collection: collection
            //        })
            //}).render();


            App.layout.setView('.main-container', new View({
                collection: collection
            }));
            App.layout.render();

        });
    };

    module.exports = Module;
});
