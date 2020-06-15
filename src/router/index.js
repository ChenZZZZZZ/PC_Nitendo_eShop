import VueRouter from 'vue-router'
import Vue from 'vue'
import Search from "../views/search/Search";
import RecentReleases from "../views/recent_releases/RecentReleases";
import Featured from "../views/featured/Featured";
import GreatDeals from "../views/great_deals/GreatDeals";
import BestSellers from "../views/best_sellers/BestSellers";
import ComingSoon from "../views/coming_soon/ComingSoon";
import NintendoSwitchOnline from "../views/nintendo_switch_online/NintendoSwitchOnline";
import EnterCode from "../views/enter_code/EnterCode";
import GoodsDetail from "../views/goods_detail/GoodsDetail";
import Profile from "../views/Profile/Profile";




Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/recent_releases'
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/recent_releases',
    component:RecentReleases,
    children: [

    ]
  },
  {
    path:'/featured',
    component:Featured
  },
  {
    path:'/great_deals',
    component:GreatDeals
  },
  {
    path:'/best_sellers',
    component:BestSellers
  },
  {
    path:'/coming_soon',
    component:ComingSoon
  },
  {
    path:'/nintendo_switch_online',
    component:NintendoSwitchOnline
  },
  {
    path:'/enter_code',
    component:EnterCode
  },
  {
    path:'/goods_detail/:iid',
    component:GoodsDetail
  },
  {
    path:'/profile',
    component:Profile
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
