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
          {src: '1JKinney_Tunnel_web.jpg'},
          {src: '2JKinney_Arnesons_Web.jpg'},
          {src: '3JKinney_BTIWindows_Web.jpg'},
          {src: '4JKinney_Annie_Web.jpg'},
          {src: '5JKinney_McKinley_Web.jpg'},
          {src: '6JKinney_Heaven_Web.jpg'},
          /* {src: '7JKinney_Ice_Web.jpg'}, */
          {src: '8JKinney_Terry_Web.jpg'},
          {src: '9JKinney_AmericanFlag_Web.jpg'},
          /* {src: '10JKinney_Dut_Web.jpg'}, */
          {src: '11JKinney_Car_Web.jpg'},
          {src: '12JKinney_Wallpaper_Web.jpg'},
          {src: '13JKinney_Doug_Web.jpg'},
          {src: '14JKinney_Brenda_Web.jpg'},
          {src: '15JKinney_Portrait_Web.jpg'},
          {src: '16JKinney_BTILounge_Web.jpg'},
          {src: '17JKinney_Whittier_Web.jpg'},
          {src: '18JKinney_TiandDemetrius_web.jpg'},
          /* {src: '19JKinney_Crab_web.jpg'}, */
          {src: '20JKinney_Cynthia_Web.jpg'},
          {src: '21JKinney_Snow_Web.jpg'},
          {src: '22JKinney_Gabe_Web.jpg'},
          {src: '23JKinney_Cat_Web.jpg'},
          {src: '24JKinney_Ushagat_Web.jpg'}
        ];

    }])

    .controller('FoolCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

        $rootScope.gallery_src = 'img/fool_and_the_world';

        $scope.images = [
            {src: '1JKinney_Chariot.jpg'},
            {src: '2JKinney_Death.jpg'},
            {src: '3JKinney_Devil.jpg'},
            {src: '4JKinney_Coins3.jpg'},
            {src: '5JKinney_Tower.jpg'},
            {src: '6JKinney_Moon.jpg'},
            {src: '7JKinney_Swords8.jpg'},
            {src: '8JKinney_Judgment.jpg'},
            {src: '9JKinney_Cups8.jpg'}
        ];

    }])

    .controller('AwayCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

        $rootScope.gallery_src = 'img/home_and_away';

        $scope.images = [
          {src: '1%20Campstove.jpg'},
          {src: '2%20Ken%20and%20Bandit.jpg'},
          {src: '3%20Pink%20Van.jpg'},
          {src: '4%20Baby.jpg'},
          {src: '5%20Red%20Hats.jpg'},
          {src: '6%20Bozeman.jpg'},
          {src: '7%20Red%20Flowers.jpg'},
          {src: '8%20Girl%20and%20Gun.jpg'},
          {src: '9%20Cowgirl.jpg'},
          {src: '10%20Mallika%20Mountain.jpg'},
          {src: '11%20Busses.jpg'},
          {src: '12%20Fireweed.jpg'},
          {src: '13%20Steve.jpg'},
          {src: '14%20Vlad.jpg'},
          {src: '15%20Drue%20and%20Cass.jpg'},
          {src: '16%20Gogarten%20House.jpg'},
          {src: '17%20Plane.jpg'},
          {src: '18%20Ruby%20Beach.jpg'},
          {src: '19%20Mallika%20Gun.jpg'},
          {src: '20%20Subway.jpg'}
        ];

    }]);

