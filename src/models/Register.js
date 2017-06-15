/**
 * Created by wb-mjy275902 on 2017/6/14.
 */
import { insert, selectActivity, selectUser } from '../services/Register';

export default {
  namespace: 'Register',
  state: {
    userName: '',
    mobile: '',
    email: '',
    profession: '',
    company: '',
    title: '',
    province: '',
    city: '',
    activityDetail: {},
    userDetail: {},
  },
  reducers: {
    setState(state, action) {
      return { ...state, ...action };
    },
  },
  effects: {
    *submitForm(action, { call }) {
      const data = yield call(insert, action.data);
    },
    *getActivityInfo(action, { put, call }) {
      const data = yield call(selectActivity, action.eventId);
      if (data.data.status === '0000') {
        yield put({ type: 'setState', activityDetail: data.data.data });
      }
    },
    *getUserInfo(action, { put, call }) {
      const data = yield call(selectUser);
      if (data.data !== null) {
        yield put({ type: 'setState', userDetail: data.data.data });
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/register') {
          dispatch({ type: 'getUserInfo' });
        }
      });
    },
  },
};
