angular.module("app").controller("ctrl", function($scope, service){

    $scope.thisappisbroken = "This app is working";

    $scope.germData = service.getGerms();

    $scope.doSomethingOnClick = (p1) => {
      const cool = "super duper cool";
      let phrase = `These are words that are ${cool}`
    }

});
