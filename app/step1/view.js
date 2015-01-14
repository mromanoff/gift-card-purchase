define(function (require, exports, module) {
    'use strict';

    var helper = require('../common/helper');


    var Item = Backbone.Layout.extend({
        template: '#option-item',
        el: false,

        serialize: function () {
            return this.model.toJSON();
        }
    });


    module.exports = Backbone.Layout.extend({
        template: '#step1',

        initialize: function () {
            console.log('collection in view', this.collection);
            helper.scrollTop();
        },

        beforeRender: function () {
            this.collection.each(function (item) {
                this.insertView('select', new Item({
                    model: item
                }));
            }, this);
        }
    });
});