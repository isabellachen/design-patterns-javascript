//router file
const rootRouter = (function () {
  let router

  function init() {
    const routes = {}
    return {
      addRoute: (component) => {
        if (!routes[component.name]) {
          routes[component.name] = component.route
        }
        else throw new Error(`route for ${component.name} already exists`)
      },
      getRoute: (component) => routes[component.name].route
    }
  }

  return {
    getInstance: function () {
      if (!router) {
        router = init()
      }
      return router
    }
  }
})()

const router = rootRouter.getInstance()

router.addRoute({ name: 'movie-detail', route: '/movies/:movieId' })