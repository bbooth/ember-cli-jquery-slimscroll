module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function () {
    return this.addBowerPackageToProject('jquery-slimscroll', '~1.3.3');
  }
};
