/* eslint-disable no-plusplus, global-require */
import React from 'react';
import { connect } from 'dva';
import { createForm } from 'rc-form';
import styles from './VideoPage.less';
import Footer from './footer.less';

let eventId = '49';
let type = 'event';
class VideoPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    eventId = this.props.location.query.eventId || '49';
    type = this.props.location.query.type || 'event';
    if (type == 'event') {
      this.props.dispatch({ type: 'Index/getEventDetail', eventId });
    } else {
      this.props.dispatch({ type: 'Index/getLessonDetail', eventId });
      this.props.dispatch({ type: 'Index/getNewLesson' });
    }
  }

  componentDidMount() {
    $(() => {
      player = new YKU.Player('youkuplayer', {
        styleid: '0',
        client_id: 'ce68c2e986caab6e',
        vid: 'XMTg5NjQ5MDY5Ng==',
        newPlayer: true,
        autoplay: false,
      });
    });
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
    console.log('活动详情', Item);
    console.log('最新活动', lessonList);
    return (
      <div className={styles.bg_white}>
        <div id="youkuplayer" className={styles.video_play} style={{ width: '100%', height: '180px' }} />
        <div className={styles.wrap96}>

          <div className={styles.vd_name} id="session_name">{ Item.eventName ? this.myReplace(Item.eventName) : '' }</div>

          <div className={styles.vd_title}>最新课程</div>
          <div id="sessionList">
            {
              lessonList ? lessonList.map((item) => {
                return (
                  <a className={styles.vd_item} href={`#/video?eventId=${item.eventId ? item.eventId : ''}&type=${type}`}>
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
          <a href={`#/?eventId=${this.props.location.query.eventId}`} >活动简介</a>
          <a href={`#/item?eventId=${this.props.location.query.eventId}`}>活动议程</a>
          {
            type == 'event' ? (
                Item.status == 'FINISHED' ? <a href="javascript:void(0)" id="bm" className={Footer.a3}>已结束</a> :
                <a href={`#/register?eventId=${this.props.location.query.eventId}&type=${type}`} className={Footer.hover}>立即报名</a>
              ) :
                <a href={`#/video?eventId=${Item.eventId ? Item.eventId : ''}&type=${type}`} className={Footer.hover}>在线观看</a>
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
