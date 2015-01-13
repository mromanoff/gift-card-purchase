define(function (require, exports, module) {
    'use strict';

   // var app = require('app');
    //var msgBus = require('msgbus');
    var View;

    View = Backbone.Layout.extend({
        template: 'step1',

        //events: {
        //    'click a': 'navigate'
        //},

        initialize: function () {
            console.log('collection', this.collection);
            //msgBus.commands.execute('scroll:top');
        },

        serialize: function () {
            //console.log('col', this.collection.toJSON());
            return {
                giftCards: this.collection.toJSON()
            };
        }

        //,

        //navigate: function (e) {
        //    e.preventDefault();
        //    //msgBus.commands.execute('step2:get');
        //}
    });

    module.exports = View;
});