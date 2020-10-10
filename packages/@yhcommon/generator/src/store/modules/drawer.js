const state = {
  drawingList: []
};

const mutations = {
  SAVE_DRAWINGLIST: (state, list) => {
    state.drawingList.push(list);
  }
};

const actions = {
  saveDrawingList({ commit }, data) {
    commit("SAVE_DRAWINGLIST", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
