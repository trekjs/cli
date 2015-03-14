// Application defults config

export default (config) => {

  config.set('site', {
    protocol: 'http',
    host: config.env.HOST || '127.0.0.1',
    port: config.env.PORT || 3000
  }, true);

  config.set('views', {
    root: config.viewsPath
  }, true);

};
