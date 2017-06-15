/**
 * Created by wb-mjy275902 on 2017/6/14.
 */
import request from '../utils/request';
import config from '../utils/config';
import qs from 'qs';
/*
 * 获取活动详情
 * */
export async function eventDetail(eventId) {
  //alert(eventId);
  return request(`${config.baseUrl}/activityDetail.json`, {
    method: 'POST',
    credentials: 'same-origin',mode:"same-origin",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: qs.stringify({eventId:eventId})
  });
}
/*
 * 查询课程
 * */
export async function getLessonDetail(eventId) {
  return request(`${config.baseUrl}/lessonDetail.json?eventId=${eventId}`, {
    method: 'POST',
    credentials: 'same-origin',
    mode:"same-origin",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    }
  });
}
/*
*
* 获取最新课程
* */
export async function getNewLesson(eventId) {
    return request(`${config.baseUrl}/pageQueryLesson.json?pageNum=1&pageSize=5&orderColumn=NewLesson`, {
        method: 'POST',
        credentials: 'same-origin',
        mode:"same-origin",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        }
    });
}
/*
 *
 * 签到
 * */
export async function checkIn(info) {
    return request(`${config.baseUrl}/joinIn.json`, {
        method: 'POST',
        credentials: 'same-origin',
        mode:"same-origin",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: qs.stringify(info)
    });
}