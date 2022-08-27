import Vue from "vue";
import Vuex from "vuex";
import { fetchAll, fetchItem } from "./api";

Vue.use(Vuex);

export default function createStore() {
  return new Vuex.Store({
    state: {
      todoList: null,
      todoItem: null,
    },
    actions: {
      fetchAll({ commit }) {
        return fetchAll().then((todos) => {
          commit("setTodoList", todos);
        });
      },
      fetchItem({ commit }, id) {
        return fetchItem(id).then((item) => {
          commit("setItem", item);
        });
      },
    },
    mutations: {
      setTodoList(state, items) {
        state.todoList = items;
      },
      setItem(state, item) {
        state.todoItem = item;
      },
    },
  });
}
