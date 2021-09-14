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
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true, roles: ['admin', 'tutor'] }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 导师选择界面
  {
    path: '/tutorApply',
    component: Layout,
    redirect: '/tutorApply/tutorMainBoard',
    meta: { title: '教师申请', icon: 'dashboard', roles: ['admin', 'tutor'] },
    children: [
      {
        path: 'tutorMainBoard',
        name: 'tutorMainBoard',
        component: () => import('@/views/tutorMainBoard/index'),
        meta: { title: '教师申请', roles: ['admin', 'tutor'] }
      },
      {
        path: 'firstApplyDoctor/:applyType/:applyCondition/:applyId',
        name: 'firstApplyDoctor',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/firstApplyDoctor/index'),
        meta: { title: '首次申请博士生导师', roles: ['admin', 'tutor'] }
      },
      {
        path: 'addApplyDoctor/:applyType/:applyCondition/:applyId',
        name: 'addApplyDoctor',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/addApplyDoctor/index'),
        meta: { title: '博士导师增列学科岗位', roles: ['admin', 'tutor'] }
      },
      {
        path: 'noInspectApplyDoctor/:applyType/:applyCondition/:applyId',
        name: 'noInspectApplyDoctor',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/noInspectApplyDoctor/index'),
        meta: { title: '博士研究生导师免审上岗', roles: ['admin', 'tutor'] }
      },
      {
        path: 'firstApplyMaster/:applyType/:applyCondition/:applyId',
        name: 'firstApplyMaster',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/firstApplyMaster/index'),
        meta: { title: '首次申请硕士生导师（学术学位）', roles: ['admin', 'tutor'] }
      },
      {
        path: 'addApplyMaster/:applyType/:applyCondition/:applyId',
        name: 'addApplyMaster',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/addApplyMaster/index'),
        meta: { title: '学硕导师增列学科岗位', roles: ['admin', 'tutor'] }
      },
      {
        path: 'noInspectApplyMaster/:applyType/:applyCondition/:applyId',
        name: 'noInspectApplyMaster',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/noInspectApplyMaster/index'),
        meta: { title: '硕士研究生导师免审上岗', roles: ['admin', 'tutor'] }
      },
      {
        path: 'firstApplyProfessional/:applyType/:applyCondition/:applyId',
        name: 'firstApplyProfessional',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/firstApplyProfessional/index'),
        meta: { title: '首次申请硕士生导师（专业学位）', roles: ['admin', 'tutor'] }
      },
      {
        path: 'addApplyProfessional/:applyType/:applyCondition/:applyId',
        name: 'addApplyProfessional',
        hidden: true,
        component: () => import('@/views/tutorMainBoard/addApplyProfessional/index'),
        meta: { title: '专硕导师增列学科岗位', roles: ['admin', 'tutor'] }
      }
    ]
  },

  // ******************************研究生管理员---系统设置界面*********************************
  {
    path: '/graduateManager/basicManagement',
    component: Layout,
    redirect: '/graduateManager/basicManagement/user',
    name: 'BasicManagement',
    meta: { title: '研究生管理员基础管理', icon: 'el-icon-s-help', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] },
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/graduateManager/userManage/index'),
        meta: { title: '用户管理', icon: 'user', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] }
      },
      {
        path: 'systemTime',
        name: 'SystemTime',
        component: () => import('@/views/graduateManager/systemTime/index'),
        meta: { title: '设置系统时间', icon: 'tree', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] }
      }
    ]
  },
  // ******************************研究生管理员---申报流程*********************************
  {
    path: '/graduateManager/auditManager',
    component: Layout,
    redirect: '/graduateManager/auditManager/check',
    name: 'AuditManagement',
    meta: { title: '研究生管理员申报流程', icon: 'el-icon-s-help', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] },
    children: [
      {
        path: 'check',
        name: 'Check',
        component: () => import('@/views/graduateManager/auditManager/check/index'),
        meta: { title: '初审', icon: 'tree', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] }
      },
      {
        path: 'rePass',
        name: 'RePass',
        component: () => import('@/views/graduateManager/auditManager/rePass/index'),
        meta: { title: '材料审核通过', icon: 'tree', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] }
      },
      {
        path: 'reCheck',
        name: 'ReCheck',
        component: () => import('@/views/graduateManager/auditManager/reCheck/index'),
        meta: { title: '复审', icon: 'tree', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] }
      },
      {
        path: 'inputComments',
        name: 'InputComments',
        component: () => import('@/views/graduateManager/auditManager/inputComments/index'),
        meta: { title: '录入校会意见', icon: 'tree', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] }
      },
      {
        path: 'finalList',
        name: 'FinalList',
        component: () => import('@/views/graduateManager/auditManager/finalList/index'),
        meta: { title: '最终通过名单', icon: 'tree', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] }
      },
      {
        path: 'reject',
        name: 'Reject',
        component: () => import('@/views/graduateManager/auditManager/reject/index'),
        meta: { title: '院系驳回', icon: 'tree', roles: ['admin', 'graduateProfessionalManager', 'graduateAcademicManager'] }
      }

    ]
  },

  // ****************************** 社科处管理员 ******************************************

  {
    path: '/social',
    component: Layout,
    meta: { title: '社科处管理员', icon: 'el-icon-s-help', roles: ['admin', 'socialScienceManager'] },
    children: [
      {
        path: 'socialScienceCheck',
        name: 'SocialScienceCheck',
        component: () => import('@/views/socialScienceCheck/index'),
        meta: { title: '社科处审核', icon: 'tree', roles: ['admin', 'socialScienceManager'] }
      },
      {
        path: 'socialDetail',
        name: 'SocialDetail',
        hidden: true,
        component: () => import('@/views/socialScienceCheck/detail/index'),
        meta: { title: '社科处详情页面', icon: 'tree', roles: ['admin', 'socialScienceManager'] }
      }
    ]

  },
  // ************************************科研处管理员*********************************
  {
    path: '/research',
    component: Layout,
    meta: { title: '科研处管理员', icon: 'el-icon-s-help', roles: ['admin', 'scientificResearchManager'] },
    children: [
      {
        path: 'researchCheck',
        name: 'ResearchCheck',
        component: () => import('@/views/researchCheck/index'),
        meta: { title: '科研处审核', icon: 'tree', roles: ['admin', 'scientificResearchManager'] }
      },
      {
        path: 'researchDetail',
        name: 'ResearchDetail',
        hidden: true,
        component: () => import('@/views/researchCheck/detail/index'),
        meta: { title: '科研处详情信息', icon: 'tree', roles: ['admin', 'scientificResearchManager'] }
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
    meta: { title: '院系秘书基础管理', icon: 'el-icon-s-help', roles: ['admin', 'departmentSecretary'] },
    children: [
      {
        path: 'systemTimeDepartment',
        name: 'SystemTimeDepartment',
        component: () => import('@/views/departmentSecretary/systemTime/index'),
        meta: { title: '设置院系时间', icon: 'dashboard', roles: ['admin', 'departmentSecretary'] }
      }
    ]
  },

  // *****************************院系秘书管理员---申报流程*********************************

  {
    path: '/departmentSecretary/auditManager',
    component: Layout,
    redirect: 'departmentSecretary/auditManager/checkDS',
    name: 'AuditManagementDS',
    meta: { title: '院系秘书申报流程', icon: 'el-icon-s-help', roles: ['admin', 'departmentSecretary'] },
    children: [
      {
        path: 'checkDS',
        component: () => import('@/views/departmentSecretary/auditManager/check/index'),
        name: 'CheckDS',
        meta: { title: '秘书初审', icon: 'dashboard', affix: true, roles: ['admin', 'departmentSecretary'] }
      },
      {
        path: 'return',
        component: () => import('@/views/departmentSecretary/auditManager/return/index'),
        name: 'ReturnDS',
        meta: { title: '返还教师修改列表', icon: 'dashboard', affix: true, roles: ['admin', 'departmentSecretary'] }
      },
      {
        path: 'submitFh',
        component: () => import('@/views/departmentSecretary/auditManager/submitFh/index'),
        name: 'SubmitFh',
        meta: { title: '提交分会', icon: 'dashboard', affix: true, roles: ['admin', 'departmentSecretary'] }
      },
      {
        path: 'reCheckDS',
        component: () => import('@/views/departmentSecretary/auditManager/reCheck/index'),
        name: 'ReCheckDS',
        meta: { title: '录入分会意见', icon: 'dashboard', affix: true, roles: ['admin', 'departmentSecretary'] }
      },
      {
        path: 'graducateComments',
        component: () => import('@/views/departmentSecretary/auditManager/graducateComments/index'),
        name: 'GraducateComments',
        meta: { title: '查看研究生院意见', icon: 'dashboard', affix: true, roles: ['admin', 'departmentSecretary'] }
      },
      {
        path: 'finalListDS',
        component: () => import('@/views/departmentSecretary/auditManager/finalList/index'),
        name: 'FinalListDS',
        meta: { title: '最终通过名单', icon: 'dashboard', affix: true, roles: ['admin', 'departmentSecretary'] }
      }
    ]
  },
  // *****************************院系主管管理员---申报流程*********************************
  {
    path: '/departmentLeader/auditManager',
    component: Layout,
    redirect: '/dashboard',
    name: 'AuditManagementDL',
    meta: { title: '院系主管申报流程', icon: 'el-icon-s-help', roles: ['admin', 'departmentLeader'] },
    children: [
      {
        path: 'reCheckDL',
        component: () => import('@/views/departmentLeader/reCheck/index'),
        name: 'CheckDL',
        meta: { title: '院系主管复审', icon: 'dashboard', affix: true, roles: ['admin', 'departmentLeader'] }
      },
      {
        path: 'finishDL',
        component: () => import('@/views/departmentLeader/checkFinish/index'),
        name: 'FinishDL',
        meta: { title: '院系主管已审核', icon: 'dashboard', affix: true, roles: ['admin', 'departmentLeader'] }
      }
    ]
  },

  // ************************************研究生院领导*********************************
  {
    path: '/graduate',
    component: Layout,
    meta: { title: '研究生院领导', icon: 'el-icon-s-help', roles: ['admin', 'graduateLeader'] },
    children: [
      {
        path: 'graduateLeader',
        name: 'GraduateLeader',
        component: () => import('@/views/graduateLeader/index'),
        meta: { title: '研究生院领导审核', icon: 'tree', roles: ['admin', 'graduateLeader'] }
      },
      {
        path: 'graduateDetail',
        name: 'GraduateDetail',
        hidden: true,
        component: () => import('@/views/graduateLeader/detail/index'),
        meta: { title: '研究生院领导基本信息', icon: 'tree', roles: ['admin', 'graduateLeader'] }
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

  // 导师查看我的申请页面
  {
    path: '/myApply',
    component: Layout,
    children: [
      {
        path: '/myApply',
        component: () => import('@/views/myApply/index'),
        name: 'My Apply',
        meta: { title: '我的申请', icon: 'dashboard', roles: ['admin', 'tutor'] }
      },
      {
        path: '/applyDetails/:applyId/:applyTypeId',
        component: () => import('@/views/myApply/details/index'),
        name: 'Apply Details',
        meta: { title: '申请详情', roles: ['admin', 'tutor'] },
        hidden: true
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
