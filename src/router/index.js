import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/modules/Main'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import classSchedule from '@/components/classSchedule'
import Index from '@/modules/dashboard/Index'
import Index2 from '@/modules/dashboard/Index2'

import Topnav from '@/modules/layout/TopNav'
import Boxed from '@/modules/layout/Boxed'
import Fixed from '@/modules/layout/Fixed'
import Collapsed from '@/modules/layout/Collapsed'

import Widgets from '@/modules/widgets/Widgets'

import Chartjs from '@/modules/charts/Chartjs'
import Morris from '@/modules/charts/Morris'
import Flot from '@/modules/charts/Flot'
import Inline from '@/modules/charts/Inline'

import General from '@/modules/elements/General'
import Icons from '@/modules/elements/Icons'
import Buttons from '@/modules/elements/Buttons'
import Sliders from '@/modules/elements/Sliders'
import Timeline from '@/modules/elements/Timeline'
import Modals from '@/modules/elements/Modals'

import Generalform from '@/modules/forms/General'
import Advance from '@/modules/forms/Advance'
import Editors from '@/modules/forms/Editors'

import SimpleTable from '@/modules/tables/Simple'
import DataTable from '@/modules/tables/Data'

import Calendar from '@/modules/calendar/Calendar'

import Inbox from '@/modules/mailbox/Inbox'
import Compose from '@/modules/mailbox/Compose'
import ReadMail from '@/modules/mailbox/Read'

import Invoice from '@/modules/examples/Invoice'
import Profile from '@/modules/examples/Profile'
import Login from '@/modules/examples/Login'
import Register from '@/modules/examples/Register'
import Lockscreen from '@/modules/examples/Lockscreen'
import Notfound from '@/modules/examples/404'
import Servererror from '@/modules/examples/500'
import Blank from '@/modules/examples/Blank'
import Pace from '@/modules/examples/Pace'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 注册路由 - 登录
    { path: '/', component: Main },
    {
      path: '/main',
      name: 'main',
      component: Main,
       children: [
        { path: '/dashboard/index', component: Index, name: 'index' },
        { path: '/dashboard/index2', component: Index2, name: 'index2' },
        { path: '/layout/boxed', component: Boxed, name: 'boxed' },
        { path: '/layout/fixed', component: Fixed, name: 'fixed' },
        { path: '/layout/collapsed', component: Collapsed, name: 'collapsed' },
        { path: '/widgets', component: Widgets, name: 'widgets' },
        { path: '/charts/chartjs', component: Chartjs, name: 'chartjs' },
        { path: '/charts/morris', component: Morris, name: 'morris' },
        { path: '/charts/flot', component: Flot, name: 'flot' },
        { path: '/charts/inline', component: Inline, name: 'inline' },
        { path: '/elements/general', component: General, name: 'general' },
        { path: '/elements/icons', component: Icons, name: 'icons' },
        { path: '/elements/buttons', component: Buttons, name: 'buttons' },
        { path: '/elements/sliders', component: Sliders, name: 'sliders' },
        { path: '/elements/timeline', component: Timeline, name: 'timeline' },
        { path: '/elements/modals', component: Modals, name: 'modals' },
        { path: '/forms/general', component: Generalform, name: 'generalfrom' },
        { path: '/forms/advance', component: Advance, name: 'advance' },
        { path: '/forms/editors', component: Editors, name: 'editors' },
        { path: '/tables/simple', component: SimpleTable, name: 'simpleTable' },
        { path: '/tables/data', component: DataTable, name: 'dataTable' },
        { path: '/calendar', component: Calendar, name: 'calendar' },
        { path: '/mailbox/inbox', component: Inbox, name: 'inbox' },
        { path: '/mailbox/compose', component: Compose, name: 'compose' },
        { path: '/mailbox/read', component: ReadMail, name: 'readMail' },
        { path: '/examples/invoice', component: Invoice, name: 'invoice' },
        { path: '/examples/profile', component: Profile, name: 'profile' },
        { path: '/examples/404', component: Notfound, name: '404' },
        { path: '/examples/500', component: Servererror, name: '500' },
        { path: '/examples/blank', component: Blank, name: 'blank' },
        { path: '/examples/pace', component: Pace, name: 'pace' }
      ],
      beforeEnter: (to, from, next) => {
        // isLogin() ? next() : next('/');
        next()
      }
    },
    { path: '/layout/topnav', component: Topnav, name: 'topnav' },
    { path: '/examples/login', component: Login, name: 'login' },
    { path: '/examples/register', component: Register, name: 'register' },
    { path: '/examples/lockscreen', component: Lockscreen, name: 'lockscreen' },
    { path: '*', redirect: '/' },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    }, {
      path: '/hi',
      name: 'hi',
      component: Hi
    }, {
      path: '/classSchedule',
      name: 'classSchedule',
      component: classSchedule
    }, {
    // not found handler
    path: '*',
    redirect: '/'
    }
  ]
})
