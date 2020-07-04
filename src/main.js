// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store  from './store'

import VueLazyload from 'vue-lazyload'; 
Vue.use(VueLazyload, {
  error: require('./assets/404.png'),
  loading: require('./assets/loading.gif'),
  attempt: 1
}
);
// import api from './utils/api'

// Vue.prototype.$axios=api



import { Button,NavBar,Icon,Overlay,Sidebar,SidebarItem,List  } from 'vant';
import 'vant/lib/index.css';
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Overlay);  //遮罩层
Vue.use(Button);  

Vue.use(Sidebar);
Vue.use(SidebarItem);   //侧边栏
Vue.use(List);        //加载列表
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
