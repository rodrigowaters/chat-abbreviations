angular.module('App.controllers', [])

    .controller('AppCtrl', function ($scope, $mdDialog, Articles_model) {

        $scope.isOpen = false;
        $scope.selectedMode = 'md-scale';
        $scope.selectedDirection = 'up';

        $scope.articles = [];

        $scope.changeLanguage = function($lang)
        {
            document.webL10n.setLanguage($lang);
        };

        Articles_model.all().success(function ($articles) {
            $scope.articles = $articles;
        });

    });