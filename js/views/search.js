define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {

    return Backbone.View.extend({
        initialize: function () {
            this.autocomplete = new google.maps.places.Autocomplete(
                $('#autocomplete')[0], {
                    types: ['geocode']
                });
            google.maps.event.addListener(this.autocomplete, 'place_changed', _.bind(this.cityChange, this));
        },
        cityChange: function () {
            Backbone.history.navigate('weather/' + this.autocomplete.getPlace().name);
        }
    });

});
