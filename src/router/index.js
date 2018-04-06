import Vue from 'vue'
import Router from 'vue-router'

//首页
const Index = () => import('@/views/index')

//注册
const SingIn = () => import('@/views/singIn')

//登录
const SingUp = () => import('@/views/singUp')

//忘记密码
const FindPwd = () => import('@/views/findPwd')

//考试详情
const ExamDetail = () => import('@/views/exam/detail')
//考试报名
const ExamEnroll = () => import('@/views/exam/enroll')

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            meta: {title: "首页"},
            component: Index
        }, {
            path: '/sing-up',
            meta: {title: "登录"},
            component: SingUp
        }, {
            path: '/sing-in',
            meta: {title: "注册"},
            component: SingIn
        }, {
            path: '/find-pwd',
            meta: {title: "忘记密码"},
            component: FindPwd
        }, {
            path: '/exam-detail',
            meta: {title: "考试详情"},
            component: ExamDetail
        }, {
            path: '/exam-enroll',
            meta: {title: "考试报名"},
            component: ExamEnroll
        }
    ]
})


router.beforeEach((to, from, next) => {
    if (to.meta.title) {//如果设置标题，拦截后设置标题
        document.title = to.meta.title
    }
    sessionStorage.setItem('beforeUrl', from.path)

    if (to.matched.length === 0) {//匹配不到相对应的路由时，跳转到首页
        from.name ? next({name: from.name}) : next('/')
    }
    next()
})

export default router
