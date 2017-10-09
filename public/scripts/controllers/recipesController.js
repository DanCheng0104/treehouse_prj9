(function() {
    'use strict';
  angular.module('app')
  .controller('RecipesController', function($scope, dataService) {
    //get all categories
    dataService.getCategories(function(response) { 
        $scope.categories = response.data;
    });
    //get all recipes
    dataService.allRecipes(function(response) { 
        $scope.recipes = response.data;
    }); 
    //delete recipe
    $scope.removeRecipe = function(recipe,$index){
      let r = confirm("Are you sure to delete this recipe?");
      if (r == true) {
        dataService.deleteRecipe(function(response) { 
              console.log(response.data);
        },recipe._id); 
        $scope.recipes.splice($index, 1);
      } 
    }

  })
})();