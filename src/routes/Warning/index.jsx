import React from 'react';
import { connect } from 'dva';
import style from './style.less';
import { ellipisName, ellipisPID } from '../../services';

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className={style.outer}>
      <div className={style.inner}>告警详情</div>
      <a href="">意见反馈</a>
    </div>)
  }
}

class NotContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const datas = this.props.Warning.noteMessage;
    return (<div className={style.NotContent}>
      <div className={style.title}>{`贵司${datas.id}`}</div>
      <div className={style.note}>
        {
          `贵司(${ellipisPID(datas.id)})的下家商户
          ${ellipisName(datas.name)}(2088222549573605)于
          ${datas.time}
          智能规则判断交易支付跌0，请核查（如果是签约账户切换请忽略）。详情请查看http://短链接`
        }
      </div>
    </div>)
  }
}


class Dayta extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div className={style.list}>
      <div className={style.count}>
      </div>
    </div>
    )
  }
}
class Warning extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Title />
        <NotContent {...this.props} />
        <Dayta />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(Warning);
