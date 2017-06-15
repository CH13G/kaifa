/**
 * Created by wb-mjy275902 on 2017/6/14.
 */
import { eventDetail } from "../services/Event";
export default {
  namespace: 'Index',
  state: {
    eventData: {
      eventId: '',
      data: {}
    }
  },
  reducers: {
    setState(state, action) {
      return { ...state, ...action };
    },
  },
  effects: {
    *getEventDetail(action, {put, call}){
      console.log('action', action);
      if(action.eventId){
        const data =yield call(eventDetail, action.eventId);
        if( data.data.status === '0000' ) {
          yield put({
            type: "setState",
            eventData: {
              eventId: action.eventId,
              data: data.data.data
            },
          });
        }
        else{
          // 数据请求失败 返回一个处理页面
        }
      }
    },
  },
  subscriptions: {},
};
