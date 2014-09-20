define(['jquery', 'underscore.mixed', 'backbone', 'text!templates/forecast.html'], function ($, _, Backbone, ForecastTemplate) {

    return Backbone.View.extend({
        template: _.template(ForecastTemplate),
        initialize: function() {
            this.listenTo(this.model, 'destroy', this.remove);
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

});
