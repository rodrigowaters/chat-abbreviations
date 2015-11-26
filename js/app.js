angular.module('App', ['ionic', 'App.services'])

        .controller('AppCtrl', function ($scope, Articles_model, $ionicSideMenuDelegate) {

            $scope.articles = [];

            Articles_model.all().success(function ($articles) {
                $scope.articles = $articles['articles'];
            });

            $scope.changeLanguage = function ($lang) {
                document.webL10n.setLanguage($lang);
            };

        });