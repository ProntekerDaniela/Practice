import Vuex from "vuex";

import AuthAPI from "../api/auth";

import Vue from "vue";

Vue.use(Vuex);

const state = {
  user: null,
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
};

const actions = {
  async login(context, { email, password }) {
    const { token, user } = await AuthAPI.login(email, password);

    context.commit("setUser", user);

    window.localStorage.setItem("access_token", token);
  },
  async logout(context) {
    window.localStorage.removeItem("access_token");

    context.commit("setUser", null);
  },
  async updateProfile(context, profile) {
    const updatedUser = await AuthAPI.updateProfile({
      ...profile,
      token: window.localStorage.getItem("access_token"),
    });

    context.commit("setUser", updatedUser);
  },
  async register(context, data) {
    const user = await AuthAPI.register(data);

    context.commit("setUser", user);
  },
  async whoami(context) {
    const token = window.localStorage.getItem("access_token");

    if (!token) {
      return;
    }

    const user = await AuthAPI.whoami(token);

    context.commit("setUser", user);
  },
};

const getters = {
  isLoggedIn(state) {
    return !!state.user;
  },
  isUserAllergicTo(state) {
    return (ingredient) => {
      if (!state.user) return false;

      return state.user.allergies.includes(ingredient);
    };
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
