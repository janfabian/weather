({
    appDir: '../',
    baseUrl: 'js',
    dir: '../../release',
    paths: {
        jquery: 'libs/jquery/jquery',
        underscore: 'libs/underscore/underscore',
        'underscore.string': 'libs/underscore/underscore.string',
        backbone: 'libs/backbone/backbone',
        text: 'libs/require/text',
        i18n: 'libs/require/i18n',
        json2: 'libs/json/json2',
        templates: '../templates'
    },
    optimize: 'uglify',
    modules: [{
        name: 'main',
        exclude: ['jquery', 'underscore', 'backbone', 'text', 'json2', 'i18n']
    }],
    config: {
        i18n: {
            locale: localStorage.getItem('locale') || 'en-us'
        }
    }
})
