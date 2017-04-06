(function() {
  var app = angular.module('toDoList', []);

  app.controller('ItemController', ['itemsApi', function(itemsApi) {
    this.itemDescription = "";
    this.items = itemsApi.items;

    this.addItem = function(itemDescription) {
      if(!itemDescription)
        return;

      itemsApi.addItem(itemDescription);
      this.itemDescription = "";
    };

    this.deleteItem = function(item) {
      itemsApi.deleteItem(item);
    };

    itemsApi.loadItems();

  }]);
})();
