define(function (require, exports, module) {
    'use strict';

    var app = require('app');
    var msgBus = require('msgbus');
    var View;

    View = Backbone.Layout.extend({
        template: 'step2',

        events: {
        },

        initialize: function () {
            msgBus.commands.execute('scroll:top');
        }
    });

    module.exports = View;
});