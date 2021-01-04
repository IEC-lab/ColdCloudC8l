// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Header from './Header'
import Menu from './Menu'
import App from './App'
import ResourceList from './components/ResourceList'
import router from './router'
import Video from 'video.js'
import 'video.js/dist/video-js.css'

Vue.config.productionTip = false
Vue.prototype.$video = Video

new Vue({
  el: '#app_content',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#app_header',
  router,
  components: { Header },
  template: '<Header/>'
})

new Vue({
  el: '#app_menu',
  router,
  components: { Menu },
  template: '<Menu/>'
})

new Vue({
  el: '#resource_list',
  router,
  components: { ResourceList },
  template: '<ResourceList/>'
})