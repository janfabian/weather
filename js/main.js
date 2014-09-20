require.config({
    paths: {
        jquery: 'libs/jquery/dist/jquery',
        underscore: 'libs/underscore/underscore',
        'underscore.mixed': 'libs/custom/underscore.mixed',
        'underscore.string': 'libs/underscore.string/lib/underscore.string',
        backbone: 'libs/backbone/backbone',
        text: 'libs/requirejs-text/text',
        i18n: 'libs/requirejs-i18n/i18n',
        json2: 'libs/json2/json2',
        templates: '../templates'
    },
    config: {
        i18n: {
            locale: localStorage.getItem('locale') || 'en-us'
        }
    }
});

require(['app', 'json2'], function (app) {
    app.initialize();
});
