import {
  getNoteInfo
} from '../services/Event';

export default {
  namespace: 'Warning',
  state: {
    noteMessage: {},
  },

  effects: {
    *getNoteMassage(action, { call, put }) {
      const data = yield call(getNoteInfo, {});
      console.log('data', data)
      if (data.data.stat == 'ok') {
        // console.log("123",data.data.data.value)
        yield put({
          type: 'setState',
          noteMessage: data.data.data.value,
        });
      }
    }
  },

  reducers: {
    setState(state, action) {
      // console.log('rr', action)
      return { ...state, ...action };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location=>{
        if (location.pathname === '/warning') {
          dispatch({type: 'getNoteMassage'})
        }
      })
    },
  },
};
