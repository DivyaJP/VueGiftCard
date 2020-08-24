import makeOrder from './makeOrder.vue'
import showOrders from './showOrders.vue'
import editOrders from './editOrders.vue'
import homePage from './homePage.vue'

export const routes=[
  {path:'/makeOrder',component:makeOrder},
  {path:'/showOrders',component:showOrders},
  {path:'/editOrders/:id',component:editOrders,name:'editOrder'},
  {path:'/',component:homePage},
  {path:'*',redirect:'/'}
];
