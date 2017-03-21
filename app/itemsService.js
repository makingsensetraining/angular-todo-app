(function() {
  var app = angular.module('toDoList');

  app.service('itemsApi', function() {
    this.items = [];
    var id = 0;

    this.addItem = function(item) {
      if(item.description) {
        item.id = id++;
        item.done = false;
        this.items.push(item);
      }
    };

    this.deleteItem = function(item) {
      var items2 = this.items;
      this.items.forEach(function(element, index) {
        if(element.id == item.id) {
          items2.splice(index, 1);
        }
      });
    };

    this.toggleDone = function(item) {
      this.items.forEach(function(element, index) {
        if(element.id == item.id) {
          element.done = !element.done;
        }
      });
    };
  });
})();
