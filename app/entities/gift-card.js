define(function (require) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var msgBus = require('msgbus');
    var Entities = {};

    Entities.GiftCard = Backbone.Model.extend({
        defaults: {
            itemNumber: null,
            name: null
        }
    });

    Entities.GiftCardCollection = Backbone.Collection.extend({
        model: Entities.GiftCard,
        url: function () {
            return '/app/api/gift-cards-catalog.json';
        }
    });

    var API = {
        getGiftCardEntities: function () {
            var collection = new Entities.GiftCardCollection();
            var defer = $.Deferred();
            // show loading view  while fetching data
            msgBus.commands.execute('loading:show', {message: 'Loading...'});  // you can pass message. it is optional

            // setTimeout(function () {
            collection.fetch({
                success: function (data) {
                    defer.resolve(data);
                    msgBus.commands.execute('loading:hide');
                },
                error: function (model, jqXHR, textStatus) {
                    msgBus.commands.execute('loading:hide');
                    defer.reject(model, jqXHR, textStatus);
                }
            });
            // }, 1000);
            return defer.promise();
        }
    };

    msgBus.reqres.setHandler('gift-card:entities', function () {
        return API.getGiftCardEntities();
    });
});
