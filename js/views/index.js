define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/index.html',
    'views/search',
    'views/forecast',
    'i18n!nls/labels',
    'models/config'
], function ($, _, Backbone, IndexTemplate, SearchView, ForecastView, labels, config) {

    return Backbone.View.extend({
        initialize: function (app) {
            this.forecasts = app.forecasts;
            this.router = app.router;

            this.listenTo(this.forecasts, 'add', this.displayOne);
            this.listenTo(this.forecasts, 'remove', this.removeOne);
            this.listenTo(this.router, 'route:weather', this.rewriteCity);

            this.listenTo(config, 'change:speedUnits', this.rewriteUnits);
            this.listenTo(config, 'change:tempUnits', this.rewriteUnits);
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
        events: {
            'click #cels': 'writeConfig',
            'click #fahr': 'writeConfig',
            'click #kmh': 'writeConfig',
            'click #mileh': 'writeConfig'
        },
        writeConfig: function(e) {
            var d = $(e.target).data();
            config.set(d.key, d.val);
        },
        rewriteUnits: function() {
            this.$('.controls .active').removeClass('active');
            this.$('.controls #' + config.get('speedUnits')).addClass('active');
            this.$('.controls #' + config.get('tempUnits')).addClass('active');
        },
        render: function () {
            this.$el.html(this.template(labels));
            // url opened already with hash
            if (this.router.weatherQuery) {
                this.rewriteCity(this.router.weatherQuery);
            }
            this.rewriteUnits();
            new SearchView().render();
        }
    });

});
