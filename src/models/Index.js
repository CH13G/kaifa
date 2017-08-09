/**
 * Created by wb-mjy275902 on 2017/6/14.
 */
import {
  eventDetail,
  getLessonDetail,
  getNewLesson,
  checkIn
} from "../services/Event";
import { selectUser } from "../services/Register";
import { Toast } from "antd-mobile";
import qs from "qs";

export default {
  namespace: "Index",
  state: {
    eventData: {
      eventId: "",
      data: {}
    },
    lessonData: {
      lessonId: "",
      data: {}
    },
    lessonList: [],
    isChecked: false,
    submitInfo: {},
    userDetail: {},
    lessonName: "",
    isPlay: false
  },
  reducers: {
    setState(state, action) {
      return { ...state, ...action };
    }
  },
  effects: {
    *getEventDetail(action, { put, call }) {
      if (action.eventId) {
        const data = yield call(eventDetail, action.eventId);
        if (data.data.status === "0000") {
          // alert(1111)
          // alert('接口已经调用结束');
          //  alert(action.eventId);
          if (
            data.data.data.status == "NOT_BEGIN" &&
            !data.data.data.signuprequestVo
          ) {
            yield put({
              type: "getUserInfo"
            });
          }
          yield put({
            type: "setState",
            eventData: {
              eventId: action.eventId,
              data: data.data.data
            }
          });
        } else {
          // alert(2222)
          // 数据请求失败 返回一个处理页面
        }
      }
    },
    *getLessonDetail(action, { put, call }) {
      const data = yield call(getLessonDetail, action.eventId);
      if (data) {
        if (data.data.status === "0000") {
          // alert(1111)
          // action.callback( data.data.data.videoId );
          yield put({
            type: "setState",
            lessonData: {
              lessonId: action.eventId,
              data: data.data.data,
              lessonName: encodeURIComponent(data.data.data.eventName)
            }
          });
        } else {
          // alert(2222)
          // 数据请求失败 返回一个处理页面
        }
      }
    },
    *getNewLesson(action, { put, call }) {
      const data = yield call(getNewLesson);
      if (data) {
        if (data.data.status === "0000") {
          // alert(1111)
          yield put({
            type: "setState",
            lessonList: data.data.data
          });
        } else {
          // alert(2222)
          // 数据请求失败 返回一个处理页面
        }
      }
    },
    *checkIn(action, { put, call }) {
      let data;
      try {
        data = yield call(checkIn, action.info);
      } catch (e) {
        yield put({
          type: "setState",
          isChecked: false
        });
        alert("后台出错，请您刷新后重试，或者检查您的网络是否连接！");
      }
      if (data) {
        if (data.data.status == "3003") {
          yield put({
            type: "setState",
            isChecked: true,
            submitInfo: action.info
          });
          alert("您已成功签到，请不要重复签到！");
        } else if (data.data.status == "0000") {
          yield put({
            type: "setState",
            isChecked: true,
            submitInfo: action.info
          });
          alert("恭喜您，您已成功签到！");
        } else if (data.data.status == "1001") {
          yield put({
            type: "setState",
            isChecked: false
          });
          alert("活动不存在或者活动已删除");
        } else if (data.data.status == "3002") {
          yield put({
            type: "setState",
            isChecked: false
          });
          const onClose = () => {
            window.location.hash = `/register?eventId=${qs.parse(
              window.location.href.split("?")[1]
            ).eventId}`;
          };
          Toast.info("亲！未查询到您的报名信息，请先完成活动报名", 3, onClose, true);
        } else if (data.data.status == "2002") {
          yield put({
            type: "setState",
            isChecked: false
          });
          alert("签到失败，请您仔细核对填写的信息!");
        } else {
          yield put({
            type: "setState",
            isChecked: false
          });
          alert("签到失败");
        }
      } else {
        yield put({
          type: "setState",
          isChecked: false
        });
        alert("后台出错，请您刷新后重试，或者检查您的网络是否连接！");
      }
    },
    *getUserInfo(action, { put, call }) {
      const data = yield call(selectUser);
      if (data.data !== null) {
        yield put({ type: "setState", userDetail: data.data.data });
      }
    },
    *channelCode(action, { put, call }) {
      localStorage.setItem("channelCode", action.channelCode);
    }
  },
  subscriptions: {}
};
