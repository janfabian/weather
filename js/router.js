define(['jquery', 'underscore', 'backbone', 'views/index', 'views/search'], function ($, _, Backbone, IndexView, SearchView) {

    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'weather/:query': 'weather'
        },
        home: function () {},
        search: function (query) {}
    });

    return new Router();
});
