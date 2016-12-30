export const getComponents = () => {
  var local = localStorage.getItem('components');
  try {
    // return JSON.parse(local || '[]');
    return [{
      name: 'hello',
      id: 'hello-232323',
      configData: {
        msg: 'hello message from localstore.js'
      }
    }, {
      name: 'home',
      id: 'home-232323',
      configData: {
        msg: ' home message from localstore.js'
      }
    }];
  } catch(e) {
    return []
  }
}
