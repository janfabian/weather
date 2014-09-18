define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/index.html',
    'views/search'
], function ($, _, Backbone, IndexTemplate, SearchView) {

    return Backbone.View.extend({
        initialize: function () {

        },
        el: '#container',
        render: function () {
            this.$el.html(_.template(IndexTemplate));
            new SearchView().render();
        }
    });

});
