/**
 * Middleware
 */
export default (app, config) => {

  const middlewareConfig = config.get('middleware') || Object.create(null)


  // bodyparser
  app.use(require('koa-bodyparser')(middlewareConfig.bodyparser))


  // method-override
  const methodOverride = middlewareConfig.methodoverride
  if (methodOverride) {
    app.use(require('koa-methodoverride')(methodOverride.getter, methodOverride.options))
  }


  // session
  let session = {
    key: 'trek.sid',
    prefix: 'trek:sess:'
  }
  let store = middlewareConfig.session && middlewareConfig.session.store
  Object.assign(
    session,
    middlewareConfig.session,
    {
      store: Trek.isProduction && require('koa-redis')(store)
    }
  )
  app.use(require('koa-generic-session')(session))


  // compress
  const compress = config.get('middleware.compress')
  if (compress) {
    app.use(require('koa-compress')(compress))
  }

}
