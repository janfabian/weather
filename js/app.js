define(['jquery', 'underscore', 'backbone', 'router', 'views/index', 'collections/forecasts'], function($, _, Backbone, Router, IndexView, Forecasts) {

    return {
        initialize: function() {
            this.forecasts = new Forecasts();
            this.router = new Router(this);
            Backbone.history.start();
            this.indexView = new IndexView(this).render();
        }
    };

});
