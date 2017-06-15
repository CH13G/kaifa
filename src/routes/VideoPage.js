/* eslint-disable no-plusplus, global-require */
import React from 'react';
import { connect } from 'dva';
import { createForm } from 'rc-form';

import styles from './VideoPage.less';
import Footer from './footer.less';

let eventId = '49';
let type = 'event';
class VideoPage extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    eventId = this.props.location.query.eventId || '49';
    type = this.props.location.query.type || 'event';
    if( type == 'event'){
      this.props.dispatch({ type: 'Index/getEventDetail', eventId: eventId });
    }else {
      this.props.dispatch({ type: 'Index/getLessonDetail', eventId: eventId });
      this.props.dispatch({ type: 'Index/getNewLesson'});
    }
  }
  render() {
    const Item = this.props.Index.lessonData.data;
    const lessonList = this.props.Index.lessonList;
    console.log('活动详情', Item);
    console.log('最新活动', lessonList);
    return (
      <div className={styles.bg_white}>
        <div id="youkuplayer" className={styles.video_play} style={{ width: '100%', height: '180px' }} />
        <div className={styles.wrap96}>

          <div className={styles.vd_name} id="session_name">{ Item.eventName ? Item.eventName: '' }</div>

          <div className={styles.vd_title}>最新课程</div>
          <div id="sessionList">
            {
              lessonList?lessonList.map((item, index)=>{

                }):''
            }
            <a className={styles.vd_item}>
              <img
                alt=""
                src="https://jinmajiang.oss-cn-beijing.aliyuncs.com/image/20161215112325_2137.jpg"
                className={styles.photo}
              />
              <div className={styles.txt}>
                今蚂讲智慧医疗专场-天猫内容运营分享
              </div>
              <div className={styles.clear} />
            </a>
          </div>
        </div>
        <div className={Footer.footer} id="footer">
          <a href={`#/?eventId=${ this.props.location.query.eventId}`} className={Footer.hover}>活动简介</a>
          <a href={`#/item?eventId=${ this.props.location.query.eventId}`}>活动议程</a>
          {
            type == 'event'? (
                Item.status == 'FINISHED'?<a href="javascript:void(0)" id="bm" className={Footer.a3}>已结束</a>:
                  <a href={`#/register?eventId=${ this.props.location.query.eventId}&type=${type}`}>立即报名</a>
              ):
              <a href={`#/video?eventId=${Item.eventId?Item.eventId:''}&type=${type}`}>在线观看</a>
          }
        </div>
        <div className={Footer.footer_zw} />
      </div>);
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(VideoPage);
