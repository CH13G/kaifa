import React from 'react';
import { connect } from 'dva';
import { createForm } from 'rc-form';

import styles from './IndexPage.less';
import Footer from './footer.less';


class MobileDemo extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.banner}>
          <img
            alt=""
            src="https://jinmajiang.oss-cn-beijing.aliyuncs.com/image/20161219160639_7757.jpg"
            id="v_event_banner"
          />
        </div>
        <div className={styles.top}>
          <div className={styles.title} id="v_event_name">今蚂讲开发者公开课之开放技术专场</div>
          <div className={styles.pos}>
            <img alt="" src="http://event.open.alipay.com/anttalk/M/images/ab2_pos.png" className={styles.ico} />
            <span id="v_event_address">蚂蚁金服总部，杭州市西湖区万塘路18号黄龙时代广场B座14层 527会议室</span>
          </div>
          <a href="#/video" className={styles.play} id="v_view">在线观看</a>
          <div className={styles.clear} />
        </div>
        <div id="itemList">
          <div className={styles.content}>
            <div className={styles.title}>
              <img
                alt=""
                src="https://jinmajiang.oss-cn-beijing.aliyuncs.com/image/20161114153356_9950.png"
                className={styles.ico}
              />活动议程
            </div>
            <div className={styles.inf}>
              14:00 蚂蚁模式：医疗行业解决方案
              <br />
              逍然 蚂蚁金服支付宝医疗总经理
              <br />
              <br />
              14:30 蚂蚁金服开放平台
              <br />
              秉烛 蚂蚁金服支付宝开放平台技术专家
            </div>
            <div className={styles.clear} />
          </div>
        </div>
        <div className={Footer.footer} id="footer">
          <a href="/">活动简介</a>
          <a href="#/item" className={Footer.hover}>活动议程</a>
          <a id="bm" className={Footer.a3}>已结束</a>
        </div>
        <div className={Footer.footer_zw} />
      </div>
    );
  }
}

const MobileDemoWrapper = createForm()(MobileDemo);
export default connect()(MobileDemoWrapper);
