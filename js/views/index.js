define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/index.html',
    'views/search',
    'views/forecast',
    'i18n!nls/labels'
], function ($, _, Backbone, IndexTemplate, SearchView, ForecastView, labels) {

    return Backbone.View.extend({
        initialize: function (app) {
            this.forecasts = app.forecasts;
            this.listenTo(this.forecasts, 'add', this.displayOne);
            this.listenTo(this.forecasts, 'remove', this.removeOne);

            this.listenTo(app.router, 'route:weather', this.rewriteCity);
            // url opened already with hash
            if (app.router.weatherQuery) {
                _.defer(_.bind(function () {
                    this.rewriteCity(app.router.weatherQuery);
                }, this));
            }
        },
        template: _.template(IndexTemplate),
        el: '#container',
        displayOne: function (f) {
            var fv = new ForecastView({
                model: f
            }).render();
            this.$('#week-forecast').append(fv.$el);
        },
        removeOne: function (f) {
            f.destroy();
        },
        rewriteCity: function (q) {
            this.$('#city').html(q);
        },
        render: function () {
            this.$el.html(this.template(labels));
            new SearchView().render();
        }
    });

});
