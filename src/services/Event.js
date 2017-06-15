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
  return request(`${config.baseUrl}/activityDetail.json`, {
    method: 'POST',
    credentials: 'same-origin',mode:"same-origin",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: qs.stringify({eventId:eventId})
  });
}
