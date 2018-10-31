import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

const GKey = 'AIzaSyB1RQcaFg2FliL3sGawzux9hOh3O7RSseM'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      email: '',
      password: ''
    },
    ballot: [],
    following: [],
    candidates: [],
    bFilter: undefined,
    bSearch: ''
  },
  getters: {
    getUser: state => state.user,
    getBallot: state => state.ballot,
    getFollowing: state => state.following,
    getCandidates: state => {
      return state.ballot.map(contest => contest.candidates).flat()
    },
    getCandidate: (state, getters) => name => {
      return getters.getCandidates.find(cand => cand.name === name)
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setBallot(state, payload) {
      state.ballot = payload
    }
  },
  actions: {
    fetchCandidates() {
      return new Promise((resolve, reject) => {
        api.get('/candidate/1/')
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    signUp (state, user) {
      return new Promise((resolve, reject) => {
        api.post('/user/', user)
          .then(res => {
            state.commit('setUser', res.data)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    fetchBallot (state) {
      return new Promise((resolve, reject) => {
        api({
          baseURL: 'https://www.googleapis.com/civicinfo/v2/',
          url: `elections?key=${GKey}`
        }).then(res => {
          let election = res.data.elections.find(el => el.name === 'US 2018 Midterm Election')
          api({
            baseURL: 'https://www.googleapis.com/civicinfo/v2/',
            url: `voterinfo?key=${GKey}&address=886%2021st%20Ave%20SE%20Minnesota%20Minneapolis%20MN&electionId=${election.id}&officialOnly=true`
          }).then(res => {
            state.commit('setBallot', res.data.contests)
            resolve()
          }).catch(err => {
            reject(err)
          })
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
})
