import { GetterTree, ActionTree, MutationTree } from 'vuex'
import api from '~/services/UsersService'
import { IUser, IData } from '~/store/types'

export type RootState = ReturnType<typeof state>

export const state = () => ({
  users: [] as IUser[],
  totalPages: 0,
})

export const mutations: MutationTree<RootState> = {
  addData(state, data: IData) {
    state.users = data.data
    state.totalPages = data.total_pages
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async getUsers({commit}, page = 1) {
    try {
      const { data } = await api.getData(page)

      commit('addData', data as IData)
    } catch(e) {
      console.log(e)
    }
  },
}

export const getters: GetterTree<RootState, RootState> = {
  users: (state): IUser[] => state.users,
  usersById: (state) => (id: string | number): IUser | undefined => state.users.find(el => Number(el.id) === Number(id)),
  totalPages: (state): number => state.totalPages,
}
