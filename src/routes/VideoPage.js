/* eslint-disable no-plusplus, global-require */
import React from 'react';
import { connect } from 'dva';
import { createForm } from 'rc-form';

import styles from './VideoPage.less';
import Footer from './footer.less';

class VideoPage extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    let eventId = this.props.location.query.eventId || '49';
    this.props.dispatch({ type: 'Index/getEventDetail', eventId: eventId });
  }
  render() {
    const Item = this.props.Index.eventData.data;
    return (
      <div className={styles.bg_white}>
        <div id="youkuplayer" className={styles.video_play} style={{ width: '100%', height: '180px' }} />
        <div className={styles.wrap96}>

          <div className={styles.vd_name} id="session_name">今蚂讲智慧医疗专场-天猫内容运营分享</div>

          <div className={styles.vd_title}>最新课程</div>
          <div id="sessionList">
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
            <a className={styles.vd_item}>
              <img
                alt=""
                src="https://jinmajiang.oss-cn-beijing.aliyuncs.com/image/20161215112122_1825.jpg"
                className={styles.photo}
              />
              <div className={styles.txt}>
                今蚂讲智慧医疗专场-开放平台安全保障
              </div>
              <div className={styles.clear} />
            </a>
          </div>
        </div>
        <div className={Footer.footer} id="footer">
          <a href={`#/?eventId=${ this.props.location.query.eventId}`} className={Footer.hover}>活动简介</a>
          <a href={`#/item?eventId=${ this.props.location.query.eventId}`}>活动议程</a>
          {
            Item.status == 'FINISHED'?<a href="javascript:void(0)" id="bm" className={Footer.a3}>已结束</a>:''
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
