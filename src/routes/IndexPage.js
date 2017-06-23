import React from 'react';
import { connect } from 'dva';
import { createForm } from 'rc-form';

import styles from './IndexPage.less';
import Footer from './footer.less';

let eventId = '';
let type = 'event';
class IndexPage extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    eventId = this.props.location.query.eventId || '';
    type = this.props.location.query.type || 'event';
    this.props.dispatch({ type: 'Index/getEventDetail', eventId: eventId });
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
    const Item =  this.props.Index.eventData.data;
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
              {Item.eventDesc?this.myReplace(Item.eventDesc):''}
            </div>
            <div className={styles.clear} />
          </div>
        </div>
        <div className={Footer.footer} id="footer">
          <a href={`#/?eventId=${eventId}&type=${type}&lessonId=${this.props.location.query.lessonId}&vid=${this.props.location.query.vid}`} className={Footer.hover}>活动简介</a>
          <a href={`#/item?eventId=${eventId}&type=${type}&lessonId=${this.props.location.query.lessonId}&vid=${this.props.location.query.vid}`}>活动议程</a>
          {
            type == 'event'? (
                Item.status == 'FINISHED'?<a href="javascript:void(0)" id="bm" className={Footer.a3}>已结束</a>:
                    (Item.signuprequestVo?<a href="javascript:void(0)" id="bm" className={Footer.a3}>已报名</a>:<a href={`#/register?eventId=${ this.props.location.query.eventId}&type=${type}`}>立即报名</a>)
              ):
            <a href={`#/video?eventId=${this.props.location.query.lessonId}&type=${type}&vid=${this.props.location.query.vid}`}>在线观看</a>
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
