define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
    // config singleton
    return new(Backbone.Model.extend({
        defaults: {
            speedUnits: 'kmh',
            tempUnits: 'cels'
        }
    }))();

});
