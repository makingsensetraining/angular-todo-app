(function() {
  var app = angular.module('toDoList', []);
  var id = 0;
  var items = [];

  app.controller('ToDoListController', function() {
    this.items = items;
  });

  app.controller('ItemController', function() {
    this.item = {};
    this.addItem = function(item) {
      if(item.description !== undefined && item.description.trim() !== "") {
        item.id = id;
        item.done = false;
        id++;
        items.push(item);
        this.item = {};
      }
    };

    this.deleteItem = function(item) {
      items.forEach(function(element, index) {
        if(element.id == item.id) {
          items.splice(index, 1);
        }
      });
    };

    this.toggleDone = function(item) {
      items.forEach(function(element, index) {
        if(element.id == item.id) {
          if(element.done) {
            element.done = false;
          } else {
            element.done = true;
          }
        }
      });
    };
    
    this.isToggleDone = function() {
      return true;
    }
  });
})();
