/**
 * Created by wb-mjy275902 on 2017/6/14.
 */
import {
  eventDetail,
  getLessonDetail,
  getNewLesson,
  checkIn
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
    lessonList:[],
    isChecked: false,
  },
  reducers: {
    setState(state, action) {
      return { ...state, ...action };
    },
  },
  effects: {
    *getEventDetail(action, {put, call}){
      if(action.eventId){
        const data =yield call(eventDetail, action.eventId);
        console.log('获取活动详情', data);
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
    },
    *checkIn(action, { put, call }){
      let data;
      try{
        data = yield call(checkIn, action.info);
      }catch (e){
          yield put({
              type: "setState",
              isChecked: false
          });
        alert('后台出错，请您刷新后重试，或者检查您的网络是否连接！');
      }
      if(data){
        if(data.data.status == "3003"){
            yield put({
                type: "setState",
                isChecked: true
            });
            alert('您已成功签到，请不要重复签到！');
        }
        if(data.data.status == "0000"){
            yield put({
                type: "setState",
                isChecked: true
            });
            alert('恭喜您，您已成功签到！');
        }
        if(data.data.status == "3002"){
            yield put({
                type: "setState",
                isChecked: false
            });
            alert('签到失败，请您确认是否报名该活动，并已审核通过！');
        }
        if(data.data.status == "2002"){
            yield put({
                type: "setState",
                isChecked: false
            });
          alert('签到失败，请您仔细核对填写的信息!');
        }
      }else{
          yield put({
              type: "setState",
              isChecked: false
          });
        alert('后台出错，请您刷新后重试，或者检查您的网络是否连接！');
      }
    }
  },
  subscriptions: {},
};
