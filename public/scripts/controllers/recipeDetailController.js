angular.module('app')
.controller('RecipeDetailController', function($scope, $location,dataService) {

    if ($location.url().indexOf('add') >-1){
      $scope.edit=false;
      $scope.recipe = {
        "name": "",
        "description": "",
        "category": "",
        "prepTime": "",
        "cookTime": "",
        "ingredients": [],
        "steps": [],
        "_id": ""
      }
    }
    else{
      const recipeId = $location.url().split(':')[1];
      $scope.edit=true;
      dataService.editRecipe(function(response) { 
          $scope.recipe = response.data;
          $scope.previousState = response.data;
      },recipeId);    
    }
  	
    dataService.getCategories(function(response) { 
      $scope.categories = response.data;

    });

    $scope.cancelSave = function(){
      $scope.recipe = $scope.previousState;
    }
    $scope.saveRecipe = function(recipe){
      if ($scope.edit){
        dataService.updateRecipe(function(response) { 
              $scope.recipe = response.data;
              console.log(response.data);
              console.log('succeed');
        },recipe._id,recipe); 
      }
    }

    dataService.allFoodItems(function(response) { 
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
