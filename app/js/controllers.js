angular.module('myApp')

    .controller('HomeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

        $rootScope.gallery_src = 'img';

        $scope.images = [{
            src: 'buckner.jpg'
        }];

    }])

    .controller('CityCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

        $rootScope.gallery_src = 'img/city_under_one_roof';

        $scope.images = [
          {src: '01_Kinney.jpg'},
          {src: '03_Kinney.jpg'},
          {src: '05_Kinney.jpg'},
          {src: '07_Kinney.jpg'},
          {src: '08_Kinney.jpg'},
          {src: '10a_Kinney.jpg'},
          {src: '10_Kinney.jpg'},
          {src: '11_Kinney.jpg'},
          {src: '14_Kinney.jpg'},
          {src: '21_Kinney.jpg'},
          {src: '27_Kinney.jpg'},
          {src: '28_Kinney.jpg'},
          {src: '30_Kinney.jpg'},
          {src: '39_Kinney.jpg'},
          {src: '45_Kinney.jpg'},
          {src: '46_Kinney.jpg'}
        ];

    }])

    .controller('FoolCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

        $rootScope.gallery_src = 'img/fool_and_the_world';

        $scope.images = [
          {src: '7%20The%20Chariot%201500%20x%201500.jpg'},
          {src: '13%20Death%201500%20x%201500.jpg'},
          {src: '15%20The%20Devil%201500%20x%201500.jpg'},
          {src: 'Coins%203%201800%20x%201800.jpg'},
          {src: '16%20The%20Tower%201500%20x%201500.jpg'},
          {src: '18%20The%20Moon%20900%20x%20900.jpg'},
          {src: 'Swords%208%201500%20x%201500.jpg'},
          {src: '20%20Judgment%201500%20x%201500.jpg '}
        ];

    }]);