import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginComponent from './login.vue';
import RegisterComponent from './register.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/login' }, 
  { path: '/login', component: LoginComponent },
  { path: '/register', component: RegisterComponent }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  methods: {
    showMessage: function(message) {
      alert(message);
    },
    showLogin: function() {
      console.log('显示登录页面');
      this.$router.push('/login');
    },
    showRegister: function() {
      console.log('显示注册页面');
      this.$router.push('/register');
    }
  }
});
