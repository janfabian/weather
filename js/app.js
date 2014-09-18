define(['jquery', 'underscore', 'backbone', 'router', 'views/index'], function($, _, Backbone, router, IndexView) {

    return {
        initialize: function() {
            Backbone.history.start();
            new IndexView().render();
        }
    };

});
