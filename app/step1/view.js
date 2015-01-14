define(function (require, exports, module) {
    'use strict';

    module.exports = Backbone.Layout.extend({
        template: '#step1',

        events: {
            //'click a': 'navigate'
        },

        initialize: function () {
            console.log('collection in view', this.collection);
            //msgBus.commands.execute('scroll:top');
        },

        serialize: function () {
            console.log('collection to json', this.collection.toJSON());
            return {
                giftCards: this.collection.toJSON()
            };
        },

        navigate: function (e) {
            e.preventDefault();
            //msgBus.commands.execute('step2:get');
        }
    });
});