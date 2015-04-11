angular.module('App.services', [])

        .factory('Articles_model', function ($http, $templateCache) {
            var Articles_model = {};

            Articles_model.all = function () {
                return $http.get('articles.json');
            };

            Articles_model.get = function ($articleID) {
                return window['articles'][$articleID];
            };

            return Articles_model;
        });