define(['jquery',
    'underscore.mixed',
    'backbone',
    'text!templates/forecast.html',
    'models/config',
    'i18n!nls/labels'
], function ($, _, Backbone, ForecastTemplate, config, labels) {

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
            this.$el.html(this.template(_.extend(this.model.toJSON(), labels)));
            this.rewriteUnits();
            return this;
        }
    });

});
