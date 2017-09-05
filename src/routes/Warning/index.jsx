import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import { ellipisName, ellipisPID, ellipisCompany } from '#/services';
import Chart from './Chart';
import {
  Card,
  WhiteSpace,
  Flex,
  WingBlank,
  Button,
} from 'antd-mobile';
import style from './style.less';


const Title = () => (
  <div className={style.outer}>
    <div className={style.inner}>
      告警详情
      <a href="">意见反馈</a>
    </div>
  </div>
);

const NoteContent = (props) => {
  const data = _.get(props, 'Warning.noteMessage', {});
  return data
    ? (
      <div className={style.NotContent}>
        <div className={style.title}>
          {
            `${ellipisCompany(data.company)}(${ellipisPID(data.id)})`
          }
        </div>
        <div className={style.note}>
          {
            `贵司(${ellipisPID(data.id)})的下家商户
            ${ellipisName(data.name)}(${ellipisPID(data.id)})于
            ${data.time}
            智能规则判断交易支付跌0，请核查（如果是签约账户切换请忽略）。详情请查看http://短链接`
          }
        </div>
      </div>
    )
    : null;
};

const Dayta = (props) => (
  <div className={style.dayta}>
    <WhiteSpace size="lg" />
    <Card full>
      <Card.Header title="支付创建笔数" />
      <Card.Body>
        <Chart data={props.data} />
      </Card.Body>
      <Card.Footer content="查看完整数据登录云监控（确保本手机登录的支付宝是该签约账号）" />
    </Card>
  </div>
);

const Buttons = () => (
  <WingBlank style={{ padding: '.1rem 0' }}>
    <Flex justify="around">
      <Button className={style.btn} inline size="small" >误报</Button>
      <Button className={style.btn} inline size="small" type="primary"> 已修复</Button>
    </Flex>
  <div className={style.accredit}>我不是最合适的处理人，<a href="">授权他人处理</a></div>
  </WingBlank>
);

const Warning = props => (
  <div>
    <Title />
    <NoteContent {...props} />
    <Dayta data={props.payData} />
    <Buttons />
  </div>
);

const mapStateToProps = (state) => {
  return { ...state, payData: state.Warning.payData };
};
export default connect(mapStateToProps)(Warning);
