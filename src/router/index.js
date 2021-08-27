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
  // 导师选择界面
  {
    path: '/tutorApply',
    component: Layout,
    redirect: '/tutorApply/tutorMainBoard',
    meta: { title: '教师申请', icon: 'dashboard' },
    children: [
      {
        path: 'tutorMainBoard',
        name: 'tutorMainBoard',
        // hidden:true,
        // redirect: 'noRedirect',
        component: () => import('@/views/tutorMainBoard/index'),
        meta: { title: '教师申请' }
      },
      {
        path: 'firstApplyDoctor/:applyId/:applyCondition',
        name: 'firstApplyDoctor',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/FirstApplyDoctor/index'),
        meta: { title: '首次申请博士生导师' }
      },
      {
        path: 'firstApplyMaster/:applyId/:applyCondition',
        name: 'firstApplyMaster',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/FirstApplyMaster/index'),
        meta: { title: '首次申请硕士生导师（学术学位）' }
      },
      {
        path: 'addApplyMaster/:applyId/:applyCondition',
        name: 'addApplyMaster',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/AddApplyMaster/index'),
        meta: { title: '学硕导师增列学科' }
      }
    ]
  },

  // ******************************研究生管理员---系统设置界面*********************************
  {
    path: '/graduateManager/basicManagement',
    component: Layout,
    redirect: '/graduateManager/basicManagement/user',
    name: 'BasicManagement',
    meta: { title: '研究生管理员基础管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/graduateManager/userManage/index'),
        meta: { title: '用户管理', icon: 'user' }
      },
      {
        path: 'systemTime',
        name: 'SystemTime',
        component: () => import('@/views/graduateManager/systemTime/index'),
        meta: { title: '设置系统时间', icon: 'tree' }
      }
    ]
  },
  // ******************************研究生管理员---申报流程*********************************
  {
    path: '/graduateManager/auditManager',
    component: Layout,
    redirect: '/graduateManager/auditManager/check',
    name: 'AuditManagement',
    meta: { title: '研究生管理员申报流程', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'check',
        name: 'Check',
        component: () => import('@/views/graduateManager/auditManager/check/index'),
        meta: { title: '初审', icon: 'tree' }
      },
      {
        path: 'reCheck',
        name: 'ReCheck',
        component: () => import('@/views/graduateManager/auditManager/reCheck/index'),
        meta: { title: '复审', icon: 'tree' }
      },
      {
        path: 'inputComments',
        name: 'InputComments',
        component: () => import('@/views/graduateManager/auditManager/inputComments/index'),
        meta: { title: '录入校会意见', icon: 'tree' }
      },
      {
        path: 'finalList',
        name: 'FinalList',
        component: () => import('@/views/graduateManager/auditManager/finalList/index'),
        meta: { title: '最终通过名单', icon: 'tree' }
      },
      {
        path: 'reject',
        name: 'Reject',
        component: () => import('@/views/graduateManager/auditManager/reject/index'),
        meta: { title: '院系驳回', icon: 'tree' }
      },

    ]
  },

  // ****************************** 社科处管理员 ******************************************

  {
    path: '/social',
    component: Layout,
    meta: { title: '社科处管理员', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'socialScienceCheck',
        name: 'SocialScienceCheck',
        component: () => import('@/views/socialScienceCheck/index'),
        meta: { title: '社科处审核', icon: 'tree' }
      },
      {
        path: 'socialDetail',
        name: 'SocialDetail',
        component: () => import('@/views/socialScienceCheck/detail/index'),
        // meta: { title: '社科处详情页面', icon: 'tree' }
      },
    ]

  },
  // ************************************科研处管理员*********************************
  {
    path: '/research',
    component: Layout,
    meta: { title: '科研处管理员', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'researchCheck',
        name: 'ResearchCheck',
        component: () => import('@/views/researchCheck/index'),
        meta: { title: '科研处审核', icon: 'tree' }
      },
      {
        path: 'researchDetail',
        name: 'ResearchDetail',
        component: () => import('@/views/researchCheck/detail/index'),
        // meta: { title: '科研处详情信息', icon: 'tree' }
      }
    ]

  },


  // *****************************院系秘书管理员---基础管理*********************************
  {
    path: '/departmentSecretary/basicManagement',
    component: Layout,
    redirect: '/departmentSecretary/basicManagement/systemTimeDepartment',
    name: 'BasicManagementDS',
    alwaysShow: true,
    meta: { title: '院系秘书基础管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'systemTimeDepartment',
        name: 'SystemTimeDepartment',
        component: () => import('@/views/departmentSecretary/systemTime/index'),
        meta: { title: '设置院系时间', icon: 'dashboard' }
      }
    ]
  },

  // *****************************院系秘书管理员---申报流程*********************************

  {
    path: '/departmentSecretary/auditManager',
    component: Layout,
    redirect: 'departmentSecretary/auditManager/checkDS',
    name: 'AuditManagementDS',
    meta: { title: '院系秘书申报流程', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'checkDS',
        component: () => import('@/views/departmentSecretary/auditManager/check/index'),
        name: 'CheckDS',
        meta: { title: '秘书初审', icon: 'dashboard', affix: true }
      },
      {
        path: 'submitFh',
        component: () => import('@/views/departmentSecretary/auditManager/submitFh/index'),
        name: 'SubmitFh',
        meta: { title: '院系主管已审核', icon: 'dashboard', affix: true }
      },
      {
        path: 'reCheckDS',
        component: () => import('@/views/departmentSecretary/auditManager/reCheck/index'),
        name: 'ReCheckDS',
        meta: { title: '录入分会意见', icon: 'dashboard', affix: true }
      },
      {
        path: 'graducateComments',
        component: () => import('@/views/departmentSecretary/auditManager/graducateComments/index'),
        name: 'GraducateComments',
        meta: { title: '查看研究生院意见', icon: 'dashboard', affix: true }
      },
      {
        path: 'return',
        component: () => import('@/views/departmentSecretary/auditManager/return/index'),
        name: 'ReturnDS',
        meta: { title: '驳回操作', icon: 'dashboard', affix: true }
      },
      {
        path: 'finalListDS',
        component: () => import('@/views/departmentSecretary/auditManager/finalList/index'),
        name: 'FinalListDS',
        meta: { title: '最终通过名单', icon: 'dashboard', affix: true }
      }
    ]
  },
   // *****************************院系主管管理员---申报流程*********************************
   {
    path: '/departmentLeader/auditManager',
    component: Layout,
    redirect: '/dashboard',
    name: 'AuditManagementDL',
    meta: { title: '院系主管申报流程', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'reCheckDL',
        component: () => import('@/views/departmentLeader/reCheck/index'),
        name: 'CheckDL',
        meta: { title: '院系主管复审', icon: 'dashboard', affix: true }
      },
      {
        path: 'finishDL',
        component: () => import('@/views/departmentLeader/checkFinish/index'),
        name: 'FinishDL',
        meta: { title: '院系主管已审核', icon: 'dashboard', affix: true }
      }     
    ]
  },
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
        meta: { title: 'Icons', icon: 'icon', noCache: true, roles: ['dev'] }
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
