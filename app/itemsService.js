(function() {
  var app = angular.module('toDoList');

  var items = [];
  var nextId = 0;

  app.service('itemsApi', function() {
    this.items = items;

    this.addItem = function(itemDescription) {
      var item = {};
      item.itemId = nextId++;
      item.description = itemDescription;
      item.done = false;
      this.items.push(item);
    };

    this.deleteItem = function(item) {
      items.forEach(function(element, index) {
        if(element.itemId == item.itemId) {
          items.splice(index, 1);
        }
      });
    };

    this.toggleDone = function(item) {
      this.items.forEach(function(element, index) {
        if(element.itemId === item.itemId) {
          element.done = !element.done;
        }
      });
    };
  });
})();
