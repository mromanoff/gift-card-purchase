define(function (require) {
    'use strict';

    var app = require('app');
    var Backbone = require('backbone');
    var msgBus = require('msgbus');
    var Entities = {};

    Entities.Step3 = Backbone.Model.extend({
        defaults: {
            appointmentAt: null,
            updatedAt: null,
            trainerName: null,
            trainerFacility: null,
            clientId: null,
            clientName: null,
            isSigned: null,
            isSubmitted: null,
            documents: null
        },
        urlRoot: function () {
            return '/equifit/api/clients/' + app.store.get('clientId') + '/equifits/';
        }
    });

    Entities.EquifitCollection = Backbone.Collection.extend({
        model: Entities.Equifit,
        url: function () {
            return '/equifit/api/clients/' + app.store.get('clientId') + '/equifits/';
        }
    });

    var API = {
        getEquifitEntities: function () {
            var collection = new Entities.EquifitCollection();
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

    msgBus.reqres.setHandler('equifit:step3', function () {
        return API.getEquifitEntities();
    });
});
