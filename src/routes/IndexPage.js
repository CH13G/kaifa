import React from 'react';
import { connect } from 'dva';
import { createForm } from 'rc-form';

import styles from './IndexPage.less';
import Footer from './footer.less';

let eventId = '49';
let type = 'event';
class IndexPage extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    eventId = this.props.location.query.eventId || '49';
    type = this.props.location.query.type || 'event';
    if( type ){
      if( type == 'event'){
        // 活动
        this.props.dispatch({ type: 'Index/getEventDetail', eventId: eventId });
      }
      if( type == 'lesson' ){
        // 课程
        this.props.dispatch({ type: 'Index/getLessonDetail', eventId: eventId });
      }
    }
  }
  myReplace(str){
    if(str){
      return str.replace(/\\n/g,'\n').
      replace(/\\r/g,'\r').
      replace(/\\t/g,'\t').
      replace(/\&amp;/g,'&').
      replace(/\&quot;/g,'"').
      replace(/\&lt;/g,'<').
      replace(/\&gt;/g,'>').
      replace(/\&hellip;/g,'...').
      replace(/\&mdash;/g,'--').
      replace(/\&nbsp;/g,' ').
      replace(/\&copy;/g,'©').
      replace(/\&middot;/g,'·').
      replace(/\&#39;/g,"'").
      replace(/\&ldquo;/g,'“').
      replace(/\&rdquo;/g,'”').
      replace(/\&lsquo;/g,'‘').
      replace(/\&rsquo;/g,'’').
      replace(/\\\\;/g,'\\');
    }
  };
  render() {
    const Item = type == 'event'? this.props.Index.eventData.data:this.props.Index.lessonData.data;
    console.log('render Item', Item);
    return (
      <div>
        <div className={styles.banner}>
          <img
            alt=""
            src={Item.imageIi?this.myReplace(Item.imageIi):''}
            id="v_event_banner"
          />
        </div>
        <div className={styles.top}>
          <div className={styles.title} id="v_event_name">{Item.eventName?this.myReplace(Item.eventName):''}</div>
          <div className={styles.pos}>
            <img alt="" src="http://event.open.alipay.com/anttalk/M/images/ab2_pos.png" className={styles.ico} />
            <span id="v_event_address">{Item.address?this.myReplace(Item.address):''}</span>
          </div>
          <div className={styles.clear} />
        </div>
        <div id="itemList">
          <div className={styles.content}>
            <div className={styles.title}>
              <img
                alt=""
                src="https://jinmajiang.oss-cn-beijing.aliyuncs.com/image/20161114153356_9950.png"
                className={styles.ico}
              />活动介绍
            </div>
            <div className={styles.inf}>
              {Item.detailInformation?this.myReplace(Item.detailInformation):''}
            </div>
            <div className={styles.clear} />
          </div>
        </div>
        <div className={Footer.footer} id="footer">
          <a href={`#/?eventId=${eventId}&type=${type}`} className={Footer.hover}>活动简介</a>
          <a href={`#/item?eventId=${eventId}&type=${type}`}>活动议程</a>
          {
            type == 'event'? (
                Item.status == 'FINISHED'?<a href="javascript:void(0)" id="bm" className={Footer.a3}>已结束</a>:
                  <a href={`#/register?eventId=${ this.props.location.query.eventId}&type=${type}`}>立即报名</a>
              ):
            <a href={`#/video?eventId=${Item.eventId?Item.eventId:''}&type=${type}`}>在线观看</a>
          }
        </div>
        <div className={Footer.footer_zw} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(IndexPage);
