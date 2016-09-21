var app = angular.module('familyHistoryListApp', []);
app.controller('familyHistoryListController', function($scope){
	$scope.familyHistoryList = [];
	$scope.addPerson = function(){
		$scope.familyHistoryList.push({person:$scope.person, father:$scope.father, mother:$scope.mother});
		$scope.person = "";
		$scope.father = "";
		$scope.mother = "";
	}
	$scope.removeMarked = function(){
		var oldList = $scope.familyHistoryList;
		$scope.familyHistoryList = [];
		angular.forEach(oldList, function(x){
			if(!x.marked) $scope.familyHistoryList.push(x);
		});
	}
});
