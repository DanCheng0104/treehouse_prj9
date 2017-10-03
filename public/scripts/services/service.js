'use strict';

angular.module('app')
.service('dataService', function($http) {

  this.getCategories = function(callback){
    $http.get('/api/categories')
    .then(callback)
  };
  this.allRecipes = function(callback){
    $http.get('/api/recipes')
    .then(callback)
  };  
  this.getCategory = function(category,callback){
    $http.get('/api/recipes?category={category}')
    .then(callback)
  }; 
  // this.deleteTodo = function(todo) {
  //   console.log("The " + todo.name + " todo has been deleted!")
  //   // other logic
  // };
  
  // this.saveTodos = function(todos) {
  //   console.log(todos.length + " todos have been saved!");
  //   // other logic...
  // };
  
});