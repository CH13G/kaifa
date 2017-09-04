import {
  getNoteInfo,
} from '../services/Event';

export default {
  namespace: 'Warning',
  state: {
    noteMessage: {},
  },

  effects: {
    *getNoteMassage(action, { call, put }) {
      const data = yield call(getNoteInfo, {});
      if (data.data.stat == 'ok') {
        yield put({
          type: 'setState',
          noteMessage: data.data.data.value,
        });
      }
    },
  },

  reducers: {
    setState(state, action) {
      return { ...state, ...action };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/warning' || location.pathname === '/') {
          dispatch({ type: 'getNoteMassage' });
        }
      });
    },
  },
};
