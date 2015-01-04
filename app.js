var app = angular.module("OptionSelectionGrid", ['OptionsGrid']);

app.controller('OptionSelection',function($scope){
	
	$scope.options = ['India', 'America', 'Burma', 'Japan', 'China', 'Russia', 'Greece', 'Africa'];
	console.log("in app");
});