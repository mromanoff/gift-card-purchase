/**
 * Store Module
 * description: Get adn Set common data during app lifespan
 */

define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');
    //var msgBus = require('msgbus');
   //Backbone.LocalStorage = require('localstorage');
    var Entities = {};

    Entities.Store = Backbone.Model.extend({
       // localStorage: new Backbone.LocalStorage('giftCardPurchase'),

        defaults: {
            giftCards: null
        },

        initialize: function () {
            //this.on('change', this.updateStorage);
            this.on('change', this.debug);
            this.on('change:pageTitle', this.updatePageTitle);
        },

        debug: function () {
            console.warn('STORE', this.toJSON());
        }
    });


    module.exports = Entities.Store;
});
