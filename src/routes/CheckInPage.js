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
  render() {
    return (
      <div className={styles.bg_white}>
        <div className={styles.wrap94}>
          <form id="form1">
            <div className={styles.sg_title}>
              签到
            </div>
            <div className={styles.sg_top} id="div_event">
              <p><span>活动名称：</span>蚂蚁开放日 收钱码业务介绍</p>
              <p><span>时间：</span>06-19 14:00</p>
              <p><span>地点：</span>崂山区苗岭路52号巨峰创业大厦11楼1108优客工场</p>
            </div>
            <div id="div_reg">

              <div className={styles.sg_in}>
                <span className={styles.tit}>
                  <em>姓名</em>
                  <i>*</i>
                </span>
                <input type="text" className={styles.text} id="name" name="name" maxLength="20" />
              </div>

              <div className={styles.sg_in}>
                <span className={styles.tit}>
                  <em>手机</em>
                  <i>*</i>
                </span>
                <input type="text" className={styles.text} id="phone" name="phone" maxLength="20" />
              </div>

              <input type="submit" className={styles.sg_sub} value="签 到" id="btn_reg" />
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
        <div className={Footer.footer} id="footer">
          <a href="/">活动简介</a>
          <a href="#/item">活动议程</a>
          <a id="bm" className={Footer.a3}>已结束</a>
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
