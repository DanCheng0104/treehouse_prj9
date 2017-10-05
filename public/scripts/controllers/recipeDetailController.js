angular.module('app')
.controller('RecipeDetailController', function($scope, $location,dataService) {

  	const recipeId = $location.url().split(':')[1];
	
	dataService.editRecipe(function(response) { 
	    $scope.recipe = response.data;
	},recipeId);

    dataService.getCategories(function(response) { 
    	$scope.categories = response.data;
    });

    dataService.allFoodItems(function(response) { 
    	console.log(response.data);
    	$scope.foodItems = response.data;
  	}); 
})
