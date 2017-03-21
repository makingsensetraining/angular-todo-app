(function() {
  var app = angular.module('toDoList', []);

  app.controller('ItemController', ['itemsApi', function(itemsApi) {
    this.items = itemsApi.items;
    this.item = {};

    this.addItem = function(item) {
      itemsApi.addItem(item);
      this.item = {};
    };

    this.deleteItem = function(item) {
      itemsApi.deleteItem(item);
    };

    this.toggleDone = function(item) {
      itemsApi.toggleDone(item);
    };
  }]);
})();
