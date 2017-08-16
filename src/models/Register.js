/**
 * Created by wb-mjy275902 on 2017/6/14.
 */
import { insert, selectActivity, selectUser,checkLogin} from '../services/Register';

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
      if( data ){
        action.callback(data.data.status == '0000');
      }
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
    *checkLogin(action, { put, call }) {
      const data = yield call(checkLogin);
      if (!data.data.data ) {
        window.location.href=('https://ds.alipay.com/?from=mobilecodec&scheme=alipays%3a%2f%2fplatformapi%2fstartapp%3fappId%3d20000067%26url%3d'+encodeURIComponent(window.location.href));
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/register') {
          dispatch({ type: 'getUserInfo' });
          
        }
        if (location.pathname.substring(0, 1) === "/") {
          dispatch({ type: 'checkLogin' });
        }
      });
    },
  },
};
