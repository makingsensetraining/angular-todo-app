(function() {
  var app = angular.module('toDoList');

  var items = [];
  var nextId = 0;

  app.service('itemsApi', ['$http', function($http) {

    this.items = items;

    this.loadItems = function() {
      $http.get('/items').then(function(response) {
        response.data.forEach(function(element, index) {
          items.push(element);
        });
      });
    };

    this.addItem = function(itemDescription) {
      var item = {};
      item.itemId = nextId++;
      item.itemDescription = itemDescription;
      item.done = false;
      items.push(item);
    };

    this.deleteItem = function(item) {
      items.forEach(function(element, index) {
        if(element.itemId == item.itemId) {
          items.splice(index, 1);
        }
      });
    };

    this.toggleDone = function(item) {
      items.forEach(function(element, index) {
        if(element.itemId === item.itemId) {
          element.done = !element.done;
        }
      });
    };
  }]);
})();
