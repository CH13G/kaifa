/**
 * Created by wb-mjy275902 on 2017/6/14.
 */
/**
 * Created by wb-zgy269023 on 2017/6/12.
 */
/* eslint-disable no-plusplus, global-require */
import React from 'react';
import { connect } from 'dva';
import { createForm } from 'rc-form';
import styles from './RegisterPage.less';
import Footer from './footer.less';

class RegisterPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      info:{
        eventId: this.props.location.query.eventId,
        userName: '',
        mobile: '',
      },
      nameRight: true,
      mobileRight: true,
    }
    this.getName = this.getName.bind(this);
    this.getPhone = this.getPhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setNameRight = this.setNameRight.bind(this);
    this.setMobileRight = this.setMobileRight.bind(this);
  }
  componentWillMount() {
    let eventId = this.props.location.query.eventId || '49';
    // alert(eventId);
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
    getName(e){
      console.log('e.target.value', e.target.value);
      console.log('this.props.Index.submitInfo.userName',this.props.Index.submitInfo.userName);
      if( e.target.value !== this.props.Index.submitInfo.userName){
        console.log('此时应该允许提交');
      }
      const oriInfo = this.state.info;
      oriInfo.userName = e.target.value;
      this.setState({
        info: oriInfo,
      });
    }
    getPhone(e){
      console.log('e.target.value', e.target.value);
      console.log('this.props.Index.submitInfo.mobile',this.props.Index.submitInfo.mobile);
      if( e.target.value !== this.props.Index.submitInfo.mobile){
          console.log('此时应该允许提交');
      }
      const oriInfo = this.state.info;
      oriInfo.mobile = e.target.value;
      this.setState({
          info: oriInfo,
      });
    }
    handleSubmit(){
      console.log('用户点击了提交按钮');
      const info = this.state.info;
      console.log('提交的信息是：：', info);
      if( !info.userName ){
        this.setState({
          nameRight: false
        });
        return;
      }this.setState({
         nameRight: true
      });


      if( !info.mobile ){
        this.setState({
          mobileRight: false
        });
        return;
      }else{
        this.setState({
          mobileRight: true
        });
      }
      this.props.dispatch({type:'Index/checkIn', info: info});
    }
    setNameRight(){
      this.setState({
        nameRight: true
      });
    }
    setMobileRight(){
      this.setState({
        mobileRight: true
      });
    }
  render() {
    const Item = this.props.Index.eventData.data;
   // alert(JSON.stringify(Item));
    return (
      <div className={styles.bg_white} style={{fontSize:12}}>
        <div className={styles.wrap94}>
          <form id="form1">
            <div className={styles.sg_title}>
              签到
            </div>
            <div className={styles.sg_top} id="div_event">
              <p><span>活动名称：</span>{Item.eventName?this.myReplace(Item.eventName):''}</p>
              <p><span>时间：</span>{(Item.startTime?new Date(parseInt(Item.startTime, 10)):new Date()).toLocaleString().replace(/\//g, '-').replace('GMT+8','')}</p>
              <p><span>地点：</span>{Item.address?this.myReplace(Item.address):''}</p>
            </div>
            <div id="div_reg">
              <div className={styles.sg_in}>
                <span className={styles.tit}>
                  <em>姓名</em>
                  <i>*</i>
                </span>
                <input
                    type="text"
                    className={styles.text}
                    id="name" name="name"
                    maxLength="20"
                    onBlur={ (e) => { this.getName(e); } }
                    onFocus={ this.setNameRight }
                    style={this.state.nameRight?{}:{border:'1px solid red'}}
                />
              </div>
              <div style={{ color:'red', paddingLeft:'25%', display:this.state.nameRight?'none': 'block'}}>请您仔细查看姓名是否填写</div>
              <div className={styles.sg_in}>
                <span className={styles.tit}>
                  <em>手机</em>
                  <i>*</i>
                </span>
                <input
                    type="text"
                    className={styles.text}
                    id="phone" name="phone"
                    maxLength="20"
                    onBlur={ (e) => { this.getPhone(e); } }
                    onFocus={ this.setMobileRight }
                    style={this.state.mobileRight?{}:{border:'1px solid red'}}
                />
              </div>
              <div style={{ color:'red', paddingLeft:'25%', display:this.state.mobileRight?'none': 'block'}}>请您仔细查看电话是否填写</div>
              <input
                  type="button"
                  className={styles.sg_sub}
                  value="签 到" id="btn_reg"
                  onClick={ this.handleSubmit}
              />
            </div>
            <div id="div_baoming" style={{ display: 'none' }}>
              <input type="submit" className={styles.sg_sub} value="提 交" id="btn_baoming" />
            </div>
            <div id="div_yibaoming" style={{ display: 'none', textAlign: 'center', color: 'green' }}>
              您已经报名此活动
            </div>
          </form>
          <div className={styles.clear} />
        </div>
        <div className={Footer.footer_zw} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(RegisterPage);
