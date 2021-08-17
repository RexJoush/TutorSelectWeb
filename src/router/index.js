import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import chartsRouter from './modules/charts'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  //导师选择界面
  {
    path: '/tutorapply',
    component: Layout,
    // name: 'tutormainboard',
    redirect: '/tutorapply/tutormainboard',
    // alwaysShow: true,
    meta: { title: '教师申请', icon: 'dashboard' },
    children: [
      {
        path: 'tutormainboard',
        name: 'tutormainboard',
        // hidden:true,
        // redirect: 'noRedirect',
        component: () => import('@/views/tutormainboard/index'),
        meta: { title: '教师申请'},
      },
      {
        path: 'firstApplyDoctor/:applyId',
        name: 'firstApplyDoctor',
        hidden: true,
        component: () => import('@/views/tutormainboard/FirstApplyDoctor/index'),
        meta: { title: '首次申请博士生导师' },
      },
      {
        path: 'firstApplyMaster/:applyId',
        name: 'firstApplyMaster',
        hidden: true,
        component: () => import('@/views/tutormainboard/FirstApplyMaster/index'),
        meta: { title: '首次申请硕士生导师（学术学位）' },
      },
    ]
  },


  //******************************研究生管理员---系统设置界面*********************************
  {
    path: '/graducateManager/basicManagement',
    component: Layout,
    redirect: '/graducateManager/basicManagement/user',
    name: 'BasicManagement',
    meta: { title: '基础管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/graducateManager/userManage/index'),
        meta: { title: '用户管理', icon: 'user' }
      },
      {
        path: 'systemTime',
        name: 'SystemTime',
        component: () => import('@/views/graducateManager/systemTime/index'),
        meta: { title: '设置系统时间', icon: 'tree' }
      }
    ]
  },
   //******************************研究生管理员---申报流程*********************************
   {
    path: '/graducateManager/auditManager',
    component: Layout,
    redirect: '/graducateManager/auditManager/check',
    name: 'AuditManagement',
    meta: { title: '申报流程', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'check',
        name: 'Check',
        component: () => import('@/views/graducateManager/auditManager/check/index'),
        meta: { title: '初审', icon: 'tree' }
      },
      {
        path: 'reCheck',
        name: 'ReCheck',
        component: () => import('@/views/graducateManager/auditManager/reCheck/index'),
        meta: { title: '复审', icon: 'tree' }
      },
      {
        path: 'inputComments',
        name: 'InputComments',
        component: () => import('@/views/graducateManager/auditManager/inputComments/index'),
        meta: { title: '录入校会意见', icon: 'tree' }
      },
      {
        path: 'finalList',
        name: 'FinalList',
        component: () => import('@/views/graducateManager/auditManager/finalList/index'),
        meta: { title: '最终通过名单', icon: 'tree' }
      },
      {
        path: 'reject',
        name: 'Reject',
        component: () => import('@/views/graducateManager/auditManager/reject/index'),
        meta: { title: '院系驳回', icon: 'tree' }
      },
    ]
  },

  {
    path: '/sd',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'systemTime_department',
        component: () => import('@/views/departmentSecretary/systemTime_department'),
        name: 'systemTime_department',
        meta: { title: '设置院系时间', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/departmentSecretary',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'systemFirst',
        component: () => import('@/views/departmentSecretary/secretaryFirst'),
        name: 'systemFirst',
        meta: { title: '院系秘书初审', icon: 'dashboard', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [

  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true, roles: ["dev"] }
      }
    ]
  },

  /** when your routing map is too long, you can split it into small modules **/
  // chartsRouter,


  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
