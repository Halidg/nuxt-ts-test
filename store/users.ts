import api from '../services/UsersService'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { User } from '~/types/user/user-interface'

export type RootState = ReturnType<typeof state>


export const state = () => ({
  users: [] as User[]
})

export const mutations: MutationTree<RootState> = {
  addUsers(state, data) {
    state.users = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  getUsers({commit}, val) {
    return new Promise((resolve, reject) => {
      api
       .getData(val).then((data) => {
        commit('addUsers', data.data.data)
       })
    })
  },
}

export const getters: GetterTree<RootState, RootState> = {
  users: (state) => state.users,
  usersById: s => (id: string | number) => s.users.find(el => el.id === id)
}
