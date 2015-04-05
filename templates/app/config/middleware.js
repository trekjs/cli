import path from 'path';
import klm from 'koa-load-middlewares';

export default (app) => {
  let [config, ms, isProduction] = [app.config, klm(), Trek.isProduction];

  /*
  middleware(app, options);
  // or
  app.use(middleware);
  */

};