import { defineRouter } from '#q-app/wrappers'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes.js'

export default defineRouter(function () {
  const Router = createRouter({
    history: createWebHashHistory('/Versioncontrol2/'), // base path ตรงกับ publicPath
    routes,
    scrollBehavior: () => ({ left: 0, top: 0 })
  })

  return Router
})
