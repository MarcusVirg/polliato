import Vue from 'vue'
import Router from 'vue-router'
import MainView from './views/MainView'
// import FeedView from './views/FeedView'
import BallotView from './views/BallotView'
import SettingsView from './views/SettingsView'

// Register and sign in components/views
import Signin from './views/Signin'
import MakeAccount from './components/MakeAccount'
import RegSignin from './views/RegSignin'
import RegStart from './components/RegStart'
import RegPrereq from './components/RegPrereq'
import RegState from './components/RegState'
import RegForm from './components/RegForm'
import Invalid from './components/Invalid'


import CandidateModal from './views/CandidateModal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mainpage',
      component: MainView,
      children: [
        {
          path: '',
          name: 'feed',
          component: () => import(/* webpackChunkName: "feed" */ './views/FeedView.vue')
        },
        {
          path: '/ballot',
          name: 'ballot',
          component: BallotView
        },
        {
          path: '/settings',
          name: 'settings',
          component: SettingsView
        }
      ]
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: MakeAccount
    },
    {
      path: '/',
      component: RegSignin,
      children: [
        {
          path: '',
          name: 'start',
          component: RegStart
        },
        {
          path: 'state',
          name: 'state',
          component: RegState
        },
        {
          path: 'prereq',
          name: 'prereq',
          component: RegPrereq
        },
        {
          path: 'form',
          name: 'form',
          component: RegForm
        },
        {
          path: 'invalid',
          name: 'invalid',
          component: Invalid
        }
      ]
    },
    {
      path: '/candidate/:name',
      name: 'candidate',
      component: CandidateModal,
      props: true
    }
  ]
})
