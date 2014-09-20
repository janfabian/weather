define(['jquery',
    'underscore.mixed',
    'backbone',
    'text!templates/forecast.html',
    'models/config'
], function ($, _, Backbone, ForecastTemplate, config) {

    return Backbone.View.extend({
        template: _.template(ForecastTemplate),
        initialize: function () {
            this.listenTo(this.model, 'destroy', this.remove);
            this.listenTo(config, 'change:speedUnits', this.rewriteUnits);
            this.listenTo(config, 'change:tempUnits', this.rewriteUnits);
        },
        rewriteUnits: function () {
            this.$('.temp p, .wind p').addClass('hide');
            this.$('.temp p.' + config.get('tempUnits') + ', .wind p.' + config.get('speedUnits')).removeClass('hide');
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.rewriteUnits();
            return this;
        }
    });

});
