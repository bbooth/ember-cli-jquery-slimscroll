/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-jquery-slimscroll',
  included: function (app) {
    app.import(app.bowerDirectory + "/jquery-slimscroll/jquery.slimscroll.js");
  }
};
