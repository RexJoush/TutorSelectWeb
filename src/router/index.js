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
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '??????', icon: 'dashboard', affix: true, roles: ['admin', 'tutor'] }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // ??????????????????
  {
    path: '/tutorApply',
    component: Layout,
    redirect: '/tutorApply/tutorMainBoard',
    meta: { title: '????????????', icon: 'apply', roles: ['admin', 'tutor'] },
    children: [
      {
        path: 'tutorMainBoard',
        name: 'tutorMainBoard',
        component: () => import('@/views/tutorMainBoard/index'),
        meta: { title: '????????????', roles: ['admin', 'tutor'] }
      },
      {
        path: 'firstApplyDoctor/:applyType/:applyCondition/:applyId',
        name: 'firstApplyDoctor',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/firstApplyDoctor/index'),
        meta: { title: '????????????????????????', roles: ['admin', 'tutor'] }
      },
      {
        path: 'addApplyDoctor/:applyType/:applyCondition/:applyId',
        name: 'addApplyDoctor',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/addApplyDoctor/index'),
        meta: { title: '????????????????????????', roles: ['admin', 'tutor'] }
      },
      {
        path: 'noInspectApplyDoctor/:applyType/:applyCondition/:applyId',
        name: 'noInspectApplyDoctor',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/noInspectApplyDoctor/index'),
        meta: { title: '????????????????????????', roles: ['admin', 'tutor'] }
      },
      {
        path: 'firstApplyMaster/:applyType/:applyCondition/:applyId',
        name: 'firstApplyMaster',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/firstApplyMaster/index'),
        meta: { title: '????????????????????????', roles: ['admin', 'tutor'] }
      },
      {
        path: 'addApplyMaster/:applyType/:applyCondition/:applyId',
        name: 'addApplyMaster',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/addApplyMaster/index'),
        meta: { title: '????????????????????????', roles: ['admin', 'tutor'] }
      },
      {
        path: 'noInspectApplyMaster/:applyType/:applyCondition/:applyId',
        name: 'noInspectApplyMaster',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/noInspectApplyMaster/index'),
        meta: { title: '????????????????????????', roles: ['admin', 'tutor'] }
      },
      {
        path: 'firstApplyProfessional/:applyType/:applyCondition/:applyId',
        name: 'firstApplyProfessional',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/firstApplyProfessional/index'),
        meta: { title: '????????????????????????', roles: ['admin', 'tutor'] }
      },
      {
        path: 'addApplyProfessional/:applyType/:applyCondition/:applyId',
        name: 'addApplyProfessional',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/addApplyProfessional/index'),
        meta: { title: '????????????????????????', roles: ['admin', 'tutor'] }
      },
      {
        path: 'noInspectApplyProfessional/:applyType/:applyCondition/:applyId',
        name: 'noInspectApplyProfessional',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/noInspectApplyProfessional/index'),
        meta: { title: '????????????????????????', roles: ['admin', 'tutor'] }
      }
    ]
  },

  // ******************************??????????????????---??????????????????*********************************
  {
    path: '/graduateManager/basicManagement',
    component: Layout,
    redirect: '/graduateManager/basicManagement/user',
    name: 'BasicManagement',
    meta: { title: '????????????????????????', icon: 'basic-manage', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] },
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/graduateManager/userManage/index'),
        meta: { title: '????????????', icon: 'user', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] }
      },
      {
        path: 'systemTime',
        name: 'SystemTime',
        component: () => import('@/views/graduateManager/systemTime/index'),
        meta: { title: '??????????????????', icon: 'set-time', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] }
      }
    ]
  },
  // ******************************??????????????????---????????????*********************************
  {
    path: '/graduateManager/auditManager',
    component: Layout,
    redirect: '/graduateManager/auditManager/check',
    name: 'AuditManagement',
    meta: { title: '????????????????????????', icon: 'apply-process', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] },
    children: [
      {
        path: 'check',
        name: 'Check',
        component: () => import('@/views/graduateManager/auditManager/check/index'),
        meta: { title: '??????????????????', icon: 'first-check', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] }
      },
      // {
      //   path: 'rePass',
      //   name: 'RePass',
      //   component: () => import('@/views/graduateManager/auditManager/rePass/index'),
      //   meta: { title: '??????????????????', icon: 'tree', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] }
      // },
      {
        path: 'reCheck',
        name: 'ReCheck',
        component: () => import('@/views/graduateManager/auditManager/reCheck/index'),
        meta: { title: '?????????????????????', icon: 'check-pass', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] }
      },
      {
        path: 'inputComments',
        name: 'InputComments',
        component: () => import('@/views/graduateManager/auditManager/inputComments/index'),
        meta: { title: '??????????????????', icon: 'opinion', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] }
      },
      {
        path: 'finalList',
        name: 'FinalList',
        component: () => import('@/views/graduateManager/auditManager/finalList/index'),
        meta: { title: '??????????????????', icon: 'final-pass', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] }
      }
      // {
      //   path: 'reject',
      //   name: 'Reject',
      //   component: () => import('@/views/graduateManager/auditManager/reject/index'),
      //   meta: { title: '????????????', icon: 'tree', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] }
      // }

    ]
  },

  // ****************************** ?????????????????? ******************************************

  {
    path: '/social',
    component: Layout,
    meta: { title: '?????????????????????', icon: 'basic-manage', roles: ['admin', 'socialScienceManager'] },
    children: [
      {
        path: 'socialScienceCheck',
        name: 'SocialScienceCheck',
        component: () => import('@/views/socialScienceCheck/index'),
        meta: { title: '??????????????????', icon: 'first-check', roles: ['admin', 'socialScienceManager'] }
      },
      {
        path: 'checkPass',
        name: 'CheckPass',
        component: () => import('@/views/socialScienceCheck/checkPass/index'),
        meta: { title: '?????????????????????', icon: 'check-pass', roles: ['admin', 'socialScienceManager'] }
      },
      {
        path: 'checkUnpass',
        name: 'CheckUnpass',
        component: () => import('@/views/socialScienceCheck/checkUnpass/index'),
        meta: { title: '????????????????????????', icon: 'check-un-pass', roles: ['admin', 'socialScienceManager'] }
      },
      {
        path: 'socialDetail',
        name: 'SocialDetail',
        hidden: true,
        component: () => import('@/views/socialScienceCheck/detail/index'),
        meta: { title: '?????????????????????', icon: 'tree', roles: ['admin', 'socialScienceManager'] }
      }
    ]

  },
  // ************************************??????????????????*********************************
  {
    path: '/research',
    component: Layout,
    meta: { title: '?????????????????????', icon: 'basic-manage', roles: ['admin', 'scientificResearchManager'] },
    children: [
      {
        path: 'researchCheck',
        name: 'ResearchCheck',
        component: () => import('@/views/researchCheck/index'),
        meta: { title: '??????????????????', icon: 'first-check', roles: ['admin', 'scientificResearchManager'] }
      },
      {
        path: 'checkPass',
        name: 'CheckPass',
        component: () => import('@/views/researchCheck/checkPass/index'),
        meta: { title: '?????????????????????', icon: 'check-pass', roles: ['admin', 'scientificResearchManager'] }
      },
      {
        path: 'checkUnpass',
        name: 'CheckUnpass',
        component: () => import('@/views/researchCheck/checkUnpass/index'),
        meta: { title: '????????????????????????', icon: 'check-un-pass', roles: ['admin', 'scientificResearchManager'] }
      },
      {
        path: 'researchDetail',
        name: 'ResearchDetail',
        hidden: true,
        component: () => import('@/views/researchCheck/detail/index'),
        meta: { title: '?????????????????????', icon: 'tree', roles: ['admin', 'scientificResearchManager'] }
      }
    ]

  },

  // *****************************?????????????????????---????????????*********************************
  {
    path: '/departmentSecretary/basicManagement',
    component: Layout,
    redirect: '/departmentSecretary/basicManagement/systemTimeDepartment',
    name: 'BasicManagementDS',
    alwaysShow: true,
    meta: { title: '????????????????????????', icon: 'basic-manage', roles: ['admin', 'departmentSecretary'] },
    children: [
      {
        path: 'systemTimeDepartment',
        name: 'SystemTimeDepartment',
        component: () => import('@/views/departmentSecretary/systemTime/index'),
        meta: { title: '????????????????????????', icon: 'set-time', roles: ['admin', 'departmentSecretary'] }
      }
    ]
  },

  // *****************************?????????????????????---????????????*********************************

  {
    path: '/departmentSecretary/auditManager',
    component: Layout,
    redirect: 'departmentSecretary/auditManager/checkDS',
    name: 'AuditManagementDS',
    meta: { title: '????????????????????????', icon: 'apply-process', roles: ['admin', 'departmentSecretary'] },
    children: [
      {
        path: 'checkDS',
        component: () => import('@/views/departmentSecretary/auditManager/check/index'),
        name: 'CheckDS',
        meta: { title: '????????????', icon: 'first-check', affix: true, roles: ['admin', 'departmentSecretary'] }
      },
      {
        path: 'return',
        component: () => import('@/views/departmentSecretary/auditManager/return/index'),
        name: 'ReturnDS',
        meta: { title: '????????????????????????', icon: 'check-un-pass', affix: true, roles: ['admin', 'departmentSecretary'] }
      },
      {
        path: 'submitFh',
        component: () => import('@/views/departmentSecretary/auditManager/submitFh/index'),
        name: 'SubmitFh',
        meta: { title: '????????????', icon: 'check-pass', affix: true, roles: ['admin', 'departmentSecretary'] }
      },
      {
        path: 'reCheckDS',
        component: () => import('@/views/departmentSecretary/auditManager/reCheck/index'),
        name: 'ReCheckDS',
        meta: { title: '??????????????????', icon: 'opinion', affix: true, roles: ['admin', 'departmentSecretary'] }
      },
      {
        path: 'graducateComments',
        component: () => import('@/views/departmentSecretary/auditManager/graducateComments/index'),
        name: 'GraducateComments',
        meta: { title: '????????????????????????', icon: 'check-un-pass', affix: true, roles: ['admin', 'departmentSecretary'] }
      },
      {
        path: 'finalListDS',
        component: () => import('@/views/departmentSecretary/auditManager/finalList/index'),
        name: 'FinalListDS',
        meta: { title: '????????????????????????', icon: 'final-pass', affix: true, roles: ['admin', 'departmentSecretary'] }
      }
    ]
  },
  // *****************************?????????????????????---????????????*********************************
  {
    path: '/departmentLeader/auditManager',
    component: Layout,
    redirect: '/dashboard',
    name: 'AuditManagementDL',
    meta: { title: '????????????????????????', icon: 'apply-process', roles: ['admin', 'departmentLeader'] },
    children: [
      {
        path: 'reCheckDL',
        component: () => import('@/views/departmentLeader/reCheck/index'),
        name: 'CheckDL',
        meta: { title: '??????????????????', icon: 'first-check', affix: true, roles: ['admin', 'departmentLeader'] }
      },
      {
        path: 'finishDL',
        component: () => import('@/views/departmentLeader/checkFinish/index'),
        name: 'FinishDL',
        meta: { title: '?????????????????????', icon: 'check-pass', affix: true, roles: ['admin', 'departmentLeader'] }
      }
    ]
  },

  // ************************************??????????????????*********************************
  {
    path: '/graduate',
    component: Layout,
    meta: { title: '??????????????????', icon: 'el-icon-s-help', roles: ['admin', 'graduateLeader'] },
    children: [
      {
        path: 'graduateLeader',
        name: 'GraduateLeader',
        component: () => import('@/views/graduateLeader/index'),
        meta: { title: '????????????????????????', icon: 'apply-process', roles: ['admin', 'graduateLeader'] }
      },
      {
        path: 'graduateDetail',
        name: 'GraduateDetail',
        hidden: true,
        component: () => import('@/views/graduateLeader/detail/index'),
        meta: { title: '??????????????????????????????', icon: 'tree', roles: ['admin', 'graduateLeader'] }
      }
    ]

  },
  // ??????????????????????????????
  {
    path: '/myApply',
    component: Layout,
    children: [
      {
        path: '/myApply',
        component: () => import('@/views/myApply/index'),
        name: 'My Apply',
        meta: { title: '????????????', icon: 'my-apply', roles: ['admin', 'tutor'] }
      },
      {
        path: '/applyDetails/:applyId/:applyTypeId/:tutorId/:applyStatus',
        component: () => import('@/views/myApply/details/index'),
        name: 'Apply Details',
        meta: { title: '????????????', roles: ['admin', 'tutor', 'departmentSecretary', 'departmentLeader', 'graduateProfessionalManager', 'graduateAcademicManager', 'socialScienceManager', 'scientificResearchManager', 'graduateLeader'] },
        hidden: true
      }
    ]
  },
  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true, roles: ['admin'] }
      }
    ]
  },



  /** when your routing map is too long, you can split it into small modules **/
  // chartsRouter,
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://github.com/PanJiaChen/vue-element-admin',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

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
