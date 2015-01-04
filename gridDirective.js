angular.module('OptionsGrid', [])
.directive('optionSelectionGrid', function() {
	console.log("in directive");
  return {
    restrict: 'E',
    scope: {
      options: '='
    },
    replace: true, // Replace with the template below
    link: function(scope, element, attrs) {
	  console.log('in directive');
      scope.gridStyle = {};
      if (attrs.width)
        scope.gridStyle.width = attrs.width;
      if (attrs.height)
        scope.gridStyle.height = attrs.height;
    },
    templateUrl:'optionsGrid.html',
  };
});