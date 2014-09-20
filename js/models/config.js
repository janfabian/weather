define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
    // config singleton
    return new(Backbone.Model.extend({
        defaults: {
            speedUnits: 'kmh',
            tempUnits: 'cels'
        },
        set: function (key, val) {
            localStorage.setItem(key, val);
            return Backbone.Model.prototype.set.apply(this, Array.prototype.slice.call(arguments));
        }
    }))();

});
