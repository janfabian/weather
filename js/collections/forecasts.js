define(['jquery', 'underscore', 'backbone', 'models/api', 'models/forecast'], function ($, _, Backbone, api, Forecast) {

    return Backbone.Collection.extend({
        url: 'http://api.worldweatheronline.com/free/v1/weather.ashx',
        model: Forecast,
        fetch: function (attr) {
            attr.data = attr.data || '';
            attr.data += '&' + $.param({
                key: api.weather,
                format: 'json',
                num_of_days: 5
            });
            Backbone.Collection.prototype.fetch.apply(this, Array.prototype.slice.call(arguments));
        },
        parse: function(response) {
            return response.data.weather;
        }
    });

});
