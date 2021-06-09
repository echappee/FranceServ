import { GetterTree, MutationTree } from 'vuex'

// ici ce sont les datas globales
export const state = () => ({
  geolocalisation: '' as any,
})

export type RootState = ReturnType<typeof state>

// getters ceux qu'on recupere
export const getters: GetterTree<RootState, RootState> = {
  getGeolocalisation: (state) => state.geolocalisation,
}
// méthodes qui permettent de modifier les datas globales
export const mutations: MutationTree<RootState> = {
  setGeolocalisation: (state, newValue: any) =>
    (state.geolocalisation = newValue),
}
