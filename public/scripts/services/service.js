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

  this.editRecipe = function(callback,recipeId){
    $http.get(`/api/recipes/${recipeId}`)
    .then(callback)
  };

  this.updateRecipe = function(callback,recipeId,recipe){
    $http.put(`/api/recipes/${recipeId}`,recipe)
    .then(callback)
  };
  this.addRecipe = function(callback,recipe){
    $http.post('/api/recipes/',recipe)
    .then(callback)
  };
  this.allFoodItems = function(callback){
    $http.get('/api/fooditems')
    .then(callback)
  };  
  this.deleteRecipe = function(callback,recipeId){
    $http.delete(`/api/recipes/${recipeId}`)
    .then(callback)
  };
  
});