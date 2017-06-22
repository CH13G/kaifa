/* eslint-disable no-plusplus, global-require */
import React from 'react';
import { connect } from 'dva';
import { createForm } from 'rc-form';
import styles from './VideoPage.less';
import Footer from './footer.less';

let eventId = '';
let type = 'lesson';
class VideoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      lessonName: ''
    }
    this.createPlayer = this.createPlayer.bind( this );
  }
  componentWillMount() {
    eventId = this.props.location.query.eventId || '';
    type = this.props.location.query.type || 'lesson';
    if (type == 'event') {
      this.props.dispatch({ type: 'Index/getEventDetail', eventId });
    } else {
      this.props.dispatch({ type: 'Index/getNewLesson' });
      this.props.dispatch({ type: 'Index/getLessonDetail', eventId,callback: this.createPlayer});
    }
    window.addEventListener('hashchange', (e)=> {
      // alert(1111);
      // hash值发生改变
      eventId = this.props.location.query.eventId || '';
      type = this.props.location.query.type || 'lesson';
      this.createPlayer(this.props.location.query.vid);
      this.props.dispatch({ type: 'Index/setState', lessonName: this.props.location.query.lessonName});
      for( let i = 0; i< this.props.Index.lessonList.length; i++){
        if( this.props.Index.lessonList[i].eventId == eventId){
          this.props.dispatch({
            type:'Index/setState',
            lessonData: {
              lessonId: eventId,
              data:this.props.Index.lessonList[i],
              lessonName: encodeURIComponent(this.props.Index.lessonList[i])
            } });
        }
      }
    }, false);
  }
  createPlayer(vid){
    console.log('vid',vid);
      // $(() => {
      //     player = new YKU.Player('youkuplayer', {
      //         styleid: '0',
      //         client_id: 'ce68c2e986caab6e',
      //         vid: vid,
      //         newPlayer: true,
      //         autoplay: false,
      //     });
      // });
  }
  myReplace(str) {
    if (str) {
      return str.replace(/\\n/g, '\n')
      .replace(/\\r/g, '\r')
      .replace(/\\t/g, '\t')
      .replace(/\&amp;/g, '&')
      .replace(/\&quot;/g, '"')
      .replace(/\&lt;/g, '<')
      .replace(/\&gt;/g, '>')
      .replace(/\&hellip;/g, '...')
      .replace(/\&mdash;/g, '--')
      .replace(/\&nbsp;/g, ' ')
      .replace(/\&copy;/g, '©')
      .replace(/\&middot;/g, '·')
      .replace(/\&#39;/g, "'")
      .replace(/\&ldquo;/g, '“')
      .replace(/\&rdquo;/g, '”')
      .replace(/\&lsquo;/g, '‘')
      .replace(/\&rsquo;/g, '’')
      .replace(/\\\\;/g, '\\');
    }
  }
  render() {
    const Item = this.props.Index.lessonData.data;
    const lessonList = this.props.Index.lessonList;
    // console.log('活动详情', Item);
    // console.log('最新活动', lessonList);
    return (
      <div className={styles.bg_white}>
        <div id="youkuplayer" className={styles.video_play} style={{ width: '100%', height: '180px' }} />
        <div className={styles.wrap96}>
          <div className={styles.vd_name} id="session_name">{ this.props.Index.lessonName ? this.myReplace(decodeURIComponent(this.props.Index.lessonName)) : (Item.eventName ? this.myReplace(Item.eventName):'' ) }</div>
          <div className={styles.vd_title}>最新课程</div>
          <div id="sessionList">
            {
              lessonList ? lessonList.map((item) => {
                return (
                  <a
                      className={styles.vd_item}
                      href={`#/video?eventId=${item.eventId ? item.eventId : ''}&type=${type}&vid=${item.videoId}&lessonName=${encodeURIComponent(item.eventName)}`}
                  >
                    <img
                      alt=""
                      src={item.imageI}
                      className={styles.photo}
                    />
                    <div className={styles.txt}>
                      {this.myReplace(item.eventName)}
                    </div>
                    <div className={styles.clear} />
                  </a>
                );
              }) : ''
            }
          </div>
        </div>
        <div className={Footer.footer} id="footer">
          {
            Item.activityId ? <a href={`#/?eventId=${ Item.activityId }&type=${type}&lessonId=${eventId}&vid=${Item.videoId}`} >活动简介</a> :
              <a href="javascript:void(0)">活动简介</a>
          }
          {
            Item.activityId ? <a href={`#/item?eventId=${ Item.activityId}&type=${type}&lessonId=${eventId}&vid=${Item.videoId}`}>活动议程</a> :
              <a href="javascript:void(0)">活动议程</a>
          }

          {
            type == 'event' ? (
                Item.status == 'FINISHED' ? <a href="javascript:void(0)" id="bm" className={Footer.a3}>已结束</a> :
                <a href={`#/register?eventId=${this.props.location.query.eventId}&type=${type}`} className={Footer.hover}>立即报名</a>
              ) :
                <a href={`#/video?eventId=${Item.eventId ? Item.eventId : ''}&type=${type}&vid=${Item.videoId}`} className={Footer.hover}>在线观看</a>
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
