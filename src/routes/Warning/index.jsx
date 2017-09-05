import React from 'react';
import { connect } from 'dva';
import style from './style.less';
import { ellipisName, ellipisPID, ellipisCompany } from '../../services';
import {
  Card,
  WhiteSpace,
  Flex,
  WingBlank,
  Button,
} from 'antd-mobile';


class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className={style.outer}>
      <div className={style.inner}>告警详情</div>
      <a href="">意见反馈</a>
      <WhiteSpace size="lg" />
    </div>)
  }
}

class NotContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const datas = this.props.Warning.noteMessage;
    // console.log(ellipisCompany(datas.company));
    return (<div className={style.NotContent}>
      <div className={style.title}>{`${ellipisCompany(datas.company)}(${ellipisPID(datas.id)})`}</div>
      <div className={style.note}>
        {
          `贵司(${ellipisPID(datas.id)})的下家商户
          ${ellipisName(datas.name)}(${ellipisPID(datas.id)})于
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
    return (<div className={style.dayta}>
      <WhiteSpace size="lg" />
      <Card full style={{ fontSize: '1.2rem' }}>
        <Card.Header
          title="支付创建笔数"
        />
        <Card.Body>
          <div>This is content of `Card`</div>
        </Card.Body>
        <Card.Footer content="查看完整数据登录云监控（确保本手机登录的支付宝是该签约账号）" />
      </Card>
    </div>
    )
  }
}

const Buttons = () => (
  <WingBlank>
    <Flex justify='around'>
      <Button className={style.btn} inline size='large' type="primary">loading button</Button>
      <Button className={style.btn} inline size='large' type="primary" >primary button</Button>
    </Flex>
  </WingBlank>
);


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
        <Buttons />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(Warning);
