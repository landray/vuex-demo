import * as localstore from '../localstore'

const state = {
  // 当前正在编辑的component的配置
  // {name, id, configData}
  currentComponent: null,
  // {name: '', id: '', configData}
  components: (()=> localstore.getComponents())(),
};

const getters = {
  currentComponent: state => state.currentComponent,
  components: state => state.components
};


const mutations = {
  // component => {id, name}
  addComponent(state, componentName) {
    const component = {
      name: componentName,
      id: componentName + '-' + (new Date()),
    };
    state.components.push(component);
    state.currentComponent = component;
  },
  changeCurrentComponent(state, componentId) {
    if (componentId) {
      var cmpt = state.components.find( item => item.id === componentId );
      state.currentComponent = state.components.find(item => item.id === componentId);
    } else {
      state.currentComponent = null;
    }
  },
  updateComponentConfig(state, config) {
    if(state.currentComponent) {
      state.currentComponent.configData = Object.assign({}, state.currentComponent.configData, config);
    }
  }
};

export default {
  state,
  getters,
  mutations,
};
