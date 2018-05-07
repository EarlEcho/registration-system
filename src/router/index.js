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


//我的考试
const MyExam = () => import('@/views/my/myExam')
//考生须知
const Instruction = () => import('@/views/my/instruction')
//成绩查询
const ExamSearch = () => import('@/views/my/examSearch')
//准考证打印
const PrintTicket = () => import('@/views/my/printTicket')


//收藏列表
const Collect = () => import('@/views/collect/index')
//个人中心
const My = () => import('@/views/my/myInfos')

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/home',
            meta: {title: "首页", auth: true},
            component: Index
        }, {
            path: '/',
            meta: {title: "登录", auth: true},
            component: SingUp
        }, {
            path: '/sing-in',
            meta: {title: "注册", auth: true},
            component: SingIn
        }, {
            path: '/find-pwd',
            meta: {title: "忘记密码", auth: true},
            component: FindPwd
        }, {
            path: '/exam-detail',
            meta: {title: "考试详情", auth: true},
            component: ExamDetail
        }, {
            path: '/exam-enroll',
            meta: {title: "考试报名", auth: true},
            component: ExamEnroll
        }, {
            path: '/my-exam',
            meta: {title: "我的考试", auth: true},
            component: MyExam
        }, {
            path: '/instruction',
            meta: {title: "考生须知", auth: true},
            component: Instruction
        }, {
            path: '/exam-search',
            meta: {title: "成绩查询", auth: true},
            component: ExamSearch
        }, {
            path: '/print-ticket',
            meta: {title: "准考证打印", auth: true},
            component: PrintTicket
        }, {
            path: '/collect',
            meta: {title: "收藏列表", auth: true},
            component: Collect
        }, {
            path: '/my',
            meta: {title: "个人中心", auth: true},
            component: My
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
