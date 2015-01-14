define(function (require, exports, module) {
    'use strict';

    var helper = require('../common/helper');

    module.exports = Backbone.Layout.extend({
        template: '#step2',

        initialize: function () {
            helper.scrollTop();
        }

    });
});