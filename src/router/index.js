import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/home'
import Audio from '../pages/audio/audio'
import Broadcast from '../pages/broadcast/broadcast'
import Group from '../pages/group/group'
import Mine from '../pages/mine/mine'
import Film from '../components/film'
import Book from '../components/book'
import Tv from '../components/tv'
import City from '../components/city'
import Music from '../components/music'
import Homesearch from '../pages/home/homeSearch'
import Homeqrcode from '../pages/home/homeQrcode'
import Register from '../pages/public/register'
import Search from '../pages/public/search'
import Setting from '../pages/mine/setting'
import Mymsg from '../pages/mine/mymsg'
import Hotdetail from '../pages/home/hotdetail'
import More from '../pages/public/more'
import Audiodetail from '../pages/audio/audiodetail'
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio,
      children:[
        {path:'film',component:Film},
        {path:'book',component:Book},
        {path:'tv',component:Tv},
        {path:'city',component:City},
        {path:'music',component:Music}
      ]
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path:'/homesearch',
      name:'Homesearch',
      component:Homesearch
    }
    ,
    {
      path:'/homeqrcode',
      name:'Homeqrcode',
      component:Homeqrcode
    }
    ,
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/search',
      name:'Search',
      component:Search
    },
    {
      path:'/setting',
      name:'Setting',
      component:Setting
    },
    {
      path:'/mymsg',
      name:'Mymsg',
      component:Mymsg
    },
    {
      path:'/hotdetail',
      name:'Hotdetail',
      component:Hotdetail
    },
    {
      path:'/more',
      name:'More',
      component:More
    },
    {
      path:'/audiodetail',
      name:'Audiodetail',
      component:Audiodetail
    }
  ]
})

