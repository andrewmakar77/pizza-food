import Vue from 'vue'
import VueRouter from 'vue-router'


// components
import Home from '../components/Home'
import Menu from '../components/Menu'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Delivery from '../components/Delivery'
import History from '../components/History'
import OrderyGuide from '../components/OrderyGuide'
import Admin from '../components/Admin'
import Not from '../components/Not'


Vue.use(VueRouter);

export const router = new VueRouter({
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes:[
    {path:'/',
    components:{default:Home,
      'ordery-guide':OrderyGuide,
      'delivery':Delivery,
      'history':History
    }
  },
    {path:'/menu', name:'menuLink',component:Menu},
    {path:'/about',component:About,children:[
        {path:'/contacts',component:Contacts},
        {path:'/delivery',component:Delivery},
        {path:'/history',component:History},
        {path:'/ordery-guide',component:OrderyGuide}
      ]
  },
    {path:'/admin',component:Admin},
    {path:'*', component:Not}
    // {path:'*', redirect:'/'}
  ]
})

