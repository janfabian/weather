define(['jquery', 'underscore', 'backbone', 'i18n!nls/labels'], function ($, _, Backbone, labels) {

    return Backbone.Model.extend({
        initialize: function () {
            this.formatDate();
        },
        formatDate: function () {
            var d = new Date(this.get('date')),
                days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

            this.set('dateWord', labels.days[days[d.getDay()]]);
            this.set('dateObj', d);
        }
    });

});
