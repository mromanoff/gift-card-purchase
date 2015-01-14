define(function (require, exports, module) {
  'use strict';

  var $ = require('jquery');
  var Backbone = require('backbone');
  //var Store = require('./entities/store');
  var Layout = require('backbone.layoutmanager');
  //var NavComponent = require('components/nav');

  var App = {
    // The root path to run the Application.
    root: '/',
    // API endpoint.
    api: {
      giftCards:  '/App/api/gift-cards-catalog.json'
    }
    //store: new Store()
  };

  // Configure LayoutManager with Backbone Boilerplate defaults.
  Layout.configure({});

  //for debug
  //window.store =  app.store;

  App.layout = new Backbone.Layout({
    el: '#app-main',
    template: '#layout'
  });

  module.exports = App;
});
