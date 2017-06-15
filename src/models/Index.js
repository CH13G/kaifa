/**
 * Created by wb-mjy275902 on 2017/6/14.
 */
import {
  eventDetail,
  getLessonDetail,
  getNewLesson
} from "../services/Event";
export default {
  namespace: 'Index',
  state: {
    eventData: {
      eventId: '',
      data: {}
    },
    lessonData:{
      lessonId: '',
      data:{}
    },
    lessonList:[]
  },
  reducers: {
    setState(state, action) {
      return { ...state, ...action };
    },
  },
  effects: {
    *getEventDetail(action, {put, call}){
      //alert('action', JSON.stringify( action ));
      console.log('action',action);
      if(action.eventId){
        const data =yield call(eventDetail, action.eventId);
        if( data.data.status === '0000' ) {
          // alert(1111)
          yield put({
            type: "setState",
            eventData: {
              eventId: action.eventId,
              data: data.data.data
            },
          });
        }
        else{
          // alert(2222)
          // 数据请求失败 返回一个处理页面
        }
      }
    },
    *getLessonDetail(action, { put, call }) {
      console.log('准备调用接口', action);
      const data = yield call(getLessonDetail, action.eventId);
      console.log('data', data);
      if(data){
        if( data.data.status === '0000' ) {
          // alert(1111)
          yield put({
            type: "setState",
            lessonData: {
              lessonId: action.eventId,
              data: data.data.data
            },
          });
        }
        else{
          // alert(2222)
          // 数据请求失败 返回一个处理页面
        }
      }
    },
    *getNewLesson(action, { put, call }){
      const data = yield call(getNewLesson);
      if(data){
          if( data.data.status === '0000' ) {
              // alert(1111)
              yield put({
                type: "setState",
                lessonList: data.data.data
              });
          }
          else{
              // alert(2222)
              // 数据请求失败 返回一个处理页面
          }
      }
    }
  },
  subscriptions: {},
};
