import 'babel-polyfill';

var appContext = require.context('../src', true, /\.js$/);
appContext.keys().forEach(appContext);
