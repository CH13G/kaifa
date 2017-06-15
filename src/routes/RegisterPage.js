/**
 * Created by wb-zgy269023 on 2017/6/12.
 */
import React from 'react';
import { connect } from 'dva';

import styles from './RegisterPage.less';
import Footer from './footer.less';

let eventId = '49';
let type = 'event';
class RegisterPage extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    eventId = this.props.location.query.eventId || '49';
    type = this.props.location.query.type || 'event';
    this.props.dispatch({ type: 'Register/getActivityInfo', eventId: eventId });
    this.props.dispatch({ type: 'Register/getUserInfo' });
  }
  setData = (e) => {
    switch (e.target.name) {
      case 'province':
        this.props.dispatch({ type: 'Register/setState', province: e.target.value });
        break;
      case 'title':
        this.props.dispatch({ type: 'Register/setState', title: e.target.value });
        break;
      case 'userName':
        this.props.dispatch({ type: 'Register/setState', userName: e.target.value });
        break;
      case 'mobile':
        this.props.dispatch({ type: 'Register/setState', mobile: e.target.value });
        break;
      case 'email':
        this.props.dispatch({ type: 'Register/setState', email: e.target.value });
        break;
      case 'profession':
        this.props.dispatch({ type: 'Register/setState', profession: e.target.value });
        break;
      case 'company':
        this.props.dispatch({ type: 'Register/setState', company: e.target.value });
        break;
      case 'city':
        this.props.dispatch({ type: 'Register/setState', city: e.target.value });
        break;
      default:
        break;
    }
  }
  submit = (e) => {
    e.preventDefault();
    this.props.dispatch({ type: 'Register/submitForm', data: { eventId: eventId, ...this.props.Register } });
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
    console.log(this.props);
    const { Register } = this.props;
    // const Item = this.props.Index.eventData.data;
    // alert(Item);
    //  activityDetail: {},
    //   userDetail: {},
      console.log('Register', Register);
    return (
      <div className={styles.bg_white}>
        <div className={styles.wrap94}>
          <form id="form" onSubmit={this.submit}>
            <div className={styles.sg_title}>
              立即报名
            </div>
            <div className={styles.sg_top} id="div_event">

              <p><span>活动名称：</span>{this.myReplace(Register.activityDetail.eventName) || ''}</p>
              <p><span>时间：</span>{Register.activityDetail.eventName ? new Date(Register.activityDetail.startTime).toLocaleString() : ''}</p>
              <p><span>地点：</span>{this.myReplace(Register.activityDetail.address) || ''}</p>
            </div>
            <div id="div_reg">
              <div className={styles.sg_in}>
                <span className={styles.tit}>
                  <em>姓名</em>
                  <i>*</i>
                </span>
                <input type="text" className={styles.text} name="userName" maxLength="20" onChange={this.setData} required />
              </div>

              <div className={styles.sg_in}>
                <span className={styles.tit}>
                  <em>手机</em>
                  <i>*</i>
                </span>
                <input type="text" className={styles.text} name="mobile" maxLength="20" onChange={this.setData} required />
              </div>

              <div className={styles.sg_in}>
                <span className={styles.tit}>
                  <em>邮箱</em>
                  <i>*</i>
                </span>
                <input type="text" className={styles.text} name="email" maxLength="50" onChange={this.setData} required />
              </div>

              <div className={styles.sg_in}>
                <span className={styles.tit}>
                  <em>所属行业</em>
                  <i>*</i>
                </span>
                <div className={styles.mh_select}>
                  <select name="profession" onChange={this.setData} required >
                    <option value="">请选择</option>
                    <option value="互联网">互联网</option>
                    <option value="游戏">游戏</option>
                    <option value="物联网">物联网</option>
                    <option value="医疗健康">医疗健康</option>
                    <option value="汽车">汽车</option>
                    <option value="房地产">房地产</option>
                    <option value="媒体/娱乐">媒体/娱乐</option>
                    <option value="音/视频">音/视频</option>
                    <option value="农林牧渔">农林牧渔</option>
                    <option value="制造生产">制造生产</option>
                    <option value="居民服务">居民服务</option>
                    <option value="政企/社会组织">政企/社会组织</option>
                    <option value="能源">能源</option>
                    <option value="教育">教育</option>
                    <option value="物业">物业</option>
                    <option value="民生缴费">民生缴费</option>
                    <option value="政府/机构">政府/机构</option>
                    <option value="校园">校园</option>
                    <option value="医院">医院</option>
                    <option value="城市规划/建筑">城市规划/建筑</option>
                    <option value="交通运输/仓储">交通运输/仓储</option>
                    <option value="批发/零售">批发/零售</option>
                    <option value="住宿/餐饮">住宿/餐饮</option>
                    <option value="金融/财税">金融/财税</option>
                    <option value="其他">其他</option>
                  </select>
                  <span className={styles.mh_val}>{this.props.Register.profession || '请选择所属行业'}</span>
                </div>
              </div>

              <div className={styles.sg_in}>
                <span className={styles.tit}>
                  <em>公司名称</em>
                  <i>*</i>
                </span>
                <input type="text" className={styles.text} name="company" onChange={this.setData} maxLength="255" required />
              </div>

              <div className={styles.sg_in}>
                <span className={styles.tit}>
                  <em>职位</em>
                  <i>*</i>
                </span>
                <div className={styles.mh_select}>
                  <select name="title" onChange={this.setData} required >
                    <option value="">请选择</option>
                    <option value="总经理">总经理</option>
                    <option value="开发/测试">开发/测试</option>
                    <option value="架构师">架构师</option>
                    <option value="运维">运维</option>
                    <option value="市场">市场</option>
                    <option value="销售">销售</option>
                    <option value="运营">运营</option>
                    <option value="商务合作">商务合作</option>
                    <option value="产品">产品</option>
                    <option value="其它">其它</option>
                  </select>
                  <span className={styles.mh_val}>{this.props.Register.title || '请选择职位'}</span>
                </div>
              </div>

              <div className={styles.sg_in}>
                <span className={styles.tit}>
                  <em>所在地区</em>
                  <i>*</i>
                </span>
                <div className={styles.mh_select}>
                  <select name="province" onChange={this.setData}>
                    <option key={'北京市'} value={'北京市'}>北京市</option>
                    <option>天津市</option>
                    <option>上海市</option>
                    <option>重庆市</option>
                    <option>河北省</option>
                    <option>山西省</option>
                    <option>内蒙古自治区</option>
                    <option>辽宁省</option>
                    <option>吉林省</option>
                    <option>黑龙江省</option>
                    <option>江苏省</option>
                    <option>浙江省</option>
                    <option>安徽省</option>
                    <option>福建省</option>
                    <option>江西省</option>
                    <option>山东省</option>
                    <option>河南省</option>
                    <option>湖北省</option>
                    <option>湖南省</option>
                    <option>广东省</option>
                    <option>广西壮族自治区</option>
                    <option>海南省</option>
                    <option>四川省</option>
                    <option>贵州省</option>
                    <option>云南省</option>
                    <option>西藏自治区</option>
                    <option>陕西省</option>
                    <option>甘肃省</option>
                    <option>青海省</option>
                    <option>宁夏回族自治区</option>
                    <option>新疆维吾尔自治区</option>
                    <option>台湾省</option>
                    <option>香港特别行政区</option>
                    <option>澳门特别行政区</option>
                  </select>
                  <span className={styles.mh_val}>{this.props.Register.province || '请选择省份'}</span>
                </div>
              </div>

              <div className={styles.sg_in}>
                <span className={styles.tit} />
                <div className={styles.mh_select}>
                  <select name="city" onChange={this.setData}>
                    <option value="">请选择城市</option>
                    {this.props.Register.province
                      ? <option>{this.props.Register.province}</option>
                      : ''
                    }
                  </select>
                  <span className={styles.mh_val}>{this.props.Register.city || '请选择城市'}</span>
                </div>
              </div>
              <input type="submit" className={styles.sg_sub} value="提 交" id="btn_reg" />
            </div>
            <div id="div_yibaoming" style={{ display: 'none', textAlign: 'center', color: 'green' }}>
              您已经报名此活动
            </div>
          </form>
          <div className={styles.clear} />
        </div>
        <div className={Footer.footer} id="footer">
          <a href={`#/?eventId=${this.props.location.query.eventId}`} >活动简介</a>
          <a href={`#/item?eventId=${this.props.location.query.eventId}`}>活动议程</a>
          <a href={`#/register?eventId=${this.props.location.query.eventId}`} className={Footer.hover}>立即报名</a>
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
