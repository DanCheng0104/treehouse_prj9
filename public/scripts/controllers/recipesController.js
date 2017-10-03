angular.module('app')
.controller('RecipesController', function($scope, dataService) {
  // $scope.addTodo = function() {
  //   var todo = {name: "This is a new todo."};
  //   $scope.todos.unshift(todo);
  // };
  
  // $scope.helloWorld = dataService.helloWorld;
  
  dataService.getCategories(function(response) { 
      console.log(response.data);  
      $scope.categories = response.data;
    });
 
   dataService.allRecipes(function(response) { 
      console.log(response.data);  
      $scope.recipes = response.data;
    }); 
  // $scope.deleteTodo = function(todo, $index) {
  //   dataService.deleteTodo(todo);
  //   $scope.todos.splice($index, 1);
  // };
  
  // $scope.saveTodos = function() {
  //   var filteredTodos = $scope.todos.filter(function(todo) {
  //     if(todo.edited) {
  //       return todo;
  //     };
  //   });
  //   dataService.saveTodos(filteredTodos);
  // };
})