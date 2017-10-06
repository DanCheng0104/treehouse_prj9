angular.module('app')
.controller('RecipeDetailController', function($scope, $location,dataService) {
    //check to see if its to add a new recipe or edit one
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
          $scope.recipe = angular.copy(response.data);
          $scope.previousState = angular.copy(response.data);
      },recipeId);    
    }
  	//get categories
    dataService.getCategories(function(response) { 
      $scope.categories = response.data;

    });
    //cancel button
    $scope.cancelSave = function(){
      $scope.recipe = angular.copy($scope.previousState);
    }
    //save button
    $scope.saveRecipe = function(recipe){
      if ($scope.edit){
        dataService.updateRecipe(function(response) { 
              $scope.recipe = response.data;
              console.log(response.data);
              console.log('succeed');
        },recipe._id,recipe); 
      }
      else{
         dataService.addRecipe(function(response) { 
              $scope.recipe = response.data;
        },recipe);        
      }
    }
    //get all food items
    dataService.allFoodItems(function(response) { 
      $scope.foodItems = response.data;
    }); 
    //remove an ingredient
    $scope.removeIngredient = function(ingredient,$index){
      $scope.recipe.ingredients.splice($index, 1);
    }
    //add an ingredient
    $scope.addIngredient = function() {
      const ingredient = {foodItem: "",condition:"",ammount:""};
      $scope.recipe.ingredients.push(ingredient);
    };
    //remove a step
    $scope.removeStep = function(step,$index){
      $scope.recipe.steps.splice($index, 1);
    };
    //add a step
    $scope.addStep = function() {
      const step = {description: ""};
      $scope.recipe.steps.push(step);
    };
   //get all categories
    dataService.getCategories(function(response) { 
    	$scope.categories = response.data;
    });
    //get all food items
    dataService.allFoodItems(function(response) { 
    	console.log(response.data);
    	$scope.foodItems = response.data;
  	}); 
    //remove an ingredient
    $scope.removeIngredient = function(ingredient,$index){
      $scope.recipe.ingredients.splice($index, 1);
    }
    //and an ingredient
    $scope.addIngredient = function() {
      const ingredient = {foodItem: "",condition:"",ammount:""};
      $scope.recipe.ingredients.push(ingredient);
    };
    //remove step
    $scope.removeStep = function(step,$index){
      $scope.recipe.steps.splice($index, 1);
    };
    //add step
    $scope.addStep = function() {
      const step = {description: ""};
      $scope.recipe.steps.push(step);
    };
})
