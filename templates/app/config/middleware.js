import path from 'path';
import klm from 'koa-load-middlewares';

export default (app) => {
  let [config, ms, isProduction] = [app.config, klm(), Trek.isProduction];

  /**
   * Installed middleware in Trek.
   * See `trek/defaultStack.js`
   *
   *  - logger
   *     priority: 10
   *  - morgan
   *     priority: 20
   *  - responseTime
   *     priority: 30
   *  - xRequestId
   *     priority: 40
   *  - staticCache
   *     priority: 50
   *  - methodoverride
   *     priority: 60
   *  - qs
   *     priority: 70
   *  - bodyparser
   *     priority: 80
   *  - compress
   *     priority: 90
   *  - conditionalGet
   *     priority: 100
   *  - etag
   *     priority: 110
   *  - genericSession
   *     priority: 120
   *  - router
   *     priority: 1024
   *
   * Below middlewares, install them if you need.
   *
   * ```
   *  middleware: {
   *    name: middlewareName
   *    handler: middlewareHandler,
   *    options: middlewareArguments,
   *    priority: 233,
   *    disabled: true,
   *    isWrapped: true
   *  }
   *  ```
   *
   *  * handler: middleware handler
   *  * options: middleware arguments
   *  * priority: middleware sort by priority
   *  * disabled: true    // disabled middleware
   *  * isWrapped: true   // likes: `local(app)`
   */

  return {

    /*
    favicon: {
      handler: ms.favicon,
      options: path.join(config.publicPath, 'favicon.ico'),
      priority: 235
    },

    locale: {
      handler: ms.locale,
      options: app,
      isWrapped: true,
      priority: 240
    },

    i18n: {
      handler: ms.i18n,
      options: [app, config.get('i18n')],
      priority: 245
    },

    lusca: {
      handler: ms.lusca,
      options: config.get('lusca'),
      priority: 250
    },

    passport: {
      name: 'passport',
      handler: () => {
        let passport = ms.passport;
        app.use(passport.initialize());
        app.use(passport.session());
        app.setService('passport', passport);
      },
      isWrapped: true,
      priority: 255
    },

    connectFlash: {
      handler: ms.connectFlash,
      priority: 260
    },

    swig: {
      handler: ms.swig,
      options: [app, config.get('views')],
      isWrapped: true,
      priority: 265
    },

    router: {
      name: 'router',
      //disabled: true
    }
    */
  };

};