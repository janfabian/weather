define(['jquery',
    'underscore',
    'backbone',
    'router',
    'views/index',
    'collections/forecasts',
    'models/config'
], function ($, _, Backbone, Router, IndexView, Forecasts, config) {

    return {
        initialize: function () {
            this.setupConfig();

            this.forecasts = new Forecasts();
            this.router = new Router(this);
            Backbone.history.start();
            this.indexView = new IndexView(this).render();
        },
        setupConfig: function () {
            if (localStorage.getItem('tempUnits')) {
                config.set('tempUnits', localStorage.getItem('tempUnits'));
            }
            if (localStorage.getItem('speedUnits')) {
                config.set('speedUnits', localStorage.getItem('speedUnits'));
            }
        }
    };

});
