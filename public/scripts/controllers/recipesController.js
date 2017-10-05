angular.module('app')
.controller('RecipesController', function($scope, dataService) {
  // $scope.addTodo = function() {
  //   var todo = {name: "This is a new todo."};
  //   $scope.todos.unshift(todo);
  // };
  
  // $scope.helloWorld = dataService.helloWorld;
  
  dataService.getCategories(function(response) { 
      $scope.categories = response.data;
  });
 
  dataService.allRecipes(function(response) { 
      $scope.recipes = response.data;
  }); 

  $scope.removeRecipe = function(recipe,$index){
    dataService.deleteRecipe(function(response) { 
          console.log(response.data);
    },recipe._id); 
    $scope.recipes.splice($index, 1);
  }
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