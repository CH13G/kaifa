import qs from 'qs';
import request from '../utils/request';
import config from '../utils/config';


export async function insert(data) {
  return request(`${config.baseUrl}/signuprequestInsertOrUpdate.json`, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: qs.stringify({ ...data }),
  });
}
export async function selectActivity(eventId) {
  return request(`${config.baseUrl}/activityDetail.json`, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: qs.stringify({ eventId }),
  });
}
export async function selectUser() {
  return request(`${config.baseUrl}/userDetail.json`, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
  });
}
