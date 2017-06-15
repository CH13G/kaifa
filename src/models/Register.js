/**
 * Created by wb-mjy275902 on 2017/6/14.
 */

export default {
  namespace: 'Register',
  state: {
    name: '',
    phone: '',
    email: '',
    industry: '',
    company: '',
    job_role: '',
    province: '',
  },
  reducers: {
    setState(state, action) {
      return { ...state, ...action };
    },
  },
  effects: {

  },
  subscriptions: {},
};
