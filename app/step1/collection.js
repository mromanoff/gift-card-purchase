define(function (require, exports, module) {
    'use strict';

    var App =  require('app');
    var Backbone = require('backbone');
    var Model = require('./model');

    module.exports = Backbone.Collection.extend({
        model: Model,
        url: function () {
            return App.api.giftCards;
        }
    });
});
