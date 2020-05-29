import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slides: [],
    user: undefined,
    news: [],
    currentNews: undefined,
    trainers: []
  },
  getters: {
    slides(state) {
      return state.slides
    },
    user(state) {
      return state.user
    },
    news(state) {
      return state.news
    },
    currentNews(state) {
      return state.currentNews
    },
    trainers(state) {
      return state.trainers
    }
  },
  mutations: {
    setSlides(state, payload) {
      state.slides = payload
    },
    updateSlides(state, payload) {
      const idx = state.slides.findIndex(s => s.id === payload.id)
      state.slides[idx] = payload
    },
    setUser(state, payload) {
      state.user = payload
    },
    setNews(state, payload) {
      state.news = payload
    },
    getCurrentNews(state, payload) {
      const idx = state.news.findIndex(n => n.id = payload)
      state.currentNews = state.news[idx]
    },
    setTrainers(state, payload) {
      state.trainers = payload
    }
  },
  actions: {
    fetchSlides({ commit }) {
      return fetch('http://localhost:3000/slider')
        .then(res => res.json())
        .then(data => commit('setSlides', data))
        .catch(e => console.log(e))
    },
    updateSlides({ commit }, {id, likes}) {
      return fetch('http://localhost:3000/slider/' + id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({likes})
      })
        .then(res => res.json())
        .then(data => {
          commit('updateSlides', data)
        })
        .catch(e => console.log(e))
    },
    fetchUser({ commit }) {
      return fetch('http://localhost:3000/user')
        .then(res => res.json())
        .then(data => commit('setUser', data[0]))
        .catch(e => console.log(e))
    },
    login({ commit }, id) {
      return fetch('http://localhost:3000/user/' + id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({isLogin: true})
      })
        .then(res => res.json())
        .then(data => {
          commit('setUser', data)
        })
        .catch(e => console.log(e))
    },
    logout({ commit }, id) {
      return fetch('http://localhost:3000/user/' + id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({isLogin: false})
      })
        .then(res => res.json())
        .then(data => {
          commit('setUser', data)
        })
        .catch(e => console.log(e))
    },
    fetchNews({ commit }) {
      return fetch('http://localhost:3000/news')
        .then(res => res.json())
        .then(data => commit('setNews', data))
        .catch(e => console.log(e))
    },
    fetchTrainers({ commit }) {
      return fetch('http://localhost:3000/trainer')
        .then(res => res.json())
        .then(data => commit('setTrainers', data))
        .catch(e => console.log(e))
    }

  }
})
