angular.module('app')
.controller('RecipeDetailController', function($scope, $location,dataService) {

    if ($location.url().indexOf('add') >-1){
      $scope.new=true;
      const recipeId = $location.url().split(':')[1];
    }
    else{
      $scope.new=false;
    }
  	
    //displayName

	
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

    $scope.removeIngredient = function(ingredient,$index){
      $scope.recipe.ingredients.splice($index, 1);
    }

    $scope.addIngredient = function() {
      const ingredient = {foodItem: "",condition:"",ammount:""};
      $scope.recipe.ingredients.push(ingredient);
    };

    $scope.removeStep = function(step,$index){
      $scope.recipe.steps.splice($index, 1);
    };
    $scope.addStep = function() {
      const step = {description: ""};
      $scope.recipe.steps.push(step);
    };
})
