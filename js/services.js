angular.module('App.services', [])

    .factory('Articles_model', function ($http) {
        var Articles_model = {};

        Articles_model.all = function () {
            return $http.get('articles.json');
        };

        return Articles_model;
    });