const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/lukiekang/Development/new-app/gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/lukiekang/Development/new-app/gatsby/src/pages/404.js"))),
  "component---src-pages-drink-js": hot(preferDefault(require("/Users/lukiekang/Development/new-app/gatsby/src/pages/drink.js"))),
  "component---src-pages-food-js": hot(preferDefault(require("/Users/lukiekang/Development/new-app/gatsby/src/pages/food.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/lukiekang/Development/new-app/gatsby/src/pages/index.js"))),
  "component---src-pages-team-js": hot(preferDefault(require("/Users/lukiekang/Development/new-app/gatsby/src/pages/team.js")))
}

