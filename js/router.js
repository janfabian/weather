define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
    var setLanguage = function (language) {
        return function () {
            var locale = localStorage.getItem('locale');
            if (locale !== language) {
                localStorage.setItem('locale', language);
                Backbone.history.history.go(-1);
                window.location.reload();
            }
        };
    };
    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'weather/:query': 'weather',
            'cs': 'cs',
            'en': 'en'
        },
        initialize: function (app) {
            this.forecasts = app.forecasts;
        },
        home: function () {},
        weather: function (query) {
            this.weatherQuery = query;
            this.forecasts.fetch({
                data: $.param({
                    q: query
                }),
                remove: true
            });
        },
        en: setLanguage('en-us'),
        cs: setLanguage('cs-cz')
    });

    return Router;
});
