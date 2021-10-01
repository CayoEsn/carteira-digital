import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import HistoricoTransferencia from '../views/HistoricoTransferencias.vue'
import Transferencia from '../views/Transferencia.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/historico-transferencias',
      name: 'Histórico de Transferências',
      component: HistoricoTransferencia
    },
    {
      path: '/transacao',
      name: 'Transferência',
      component: Transferencia
    }
  ]
})
