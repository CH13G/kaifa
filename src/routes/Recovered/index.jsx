import React from 'react';
import { connect } from 'dva';
import style from './style.less';
// import { Result, Icon, WhiteSpace, Card,  Picker, List } from 'antd-mobile';
// import { district, provinceLite as province } from 'antd-mobile-demo-data';
// import { createForm } from 'rc-form';
// import arrayTreeFilter from 'array-tree-filter';
// import { district, provinceLite as province } from 'antd-mobile-demo-data';
const Title = () => (
  <div className={style.outer}>
    <div className={style.inner}>
      告警详情
      <a href="">意见反馈</a>
    </div>
  </div>
);

// 如果不是使用 List.Item 作为 children

// class Test extends React.Component {
//   state = {
//     data: [],
//     cols: 1,
//     pickerValue: [],
//     asyncValue: [],
//   };
//   onClick = () => {
//     setTimeout(() => {
//       this.setState({
//         data: province,
//       });
//     }, 120);
//   };
//   onPickerChange = (val) => {
//     console.log(val);
//     let colNum = 1;
//     const d = [...this.state.data];
//     const asyncValue = [...val];
//     if (val[0] === 'zj') {
//       d.forEach((i) => {
//         if (i.value === 'zj') {
//           colNum = 2;
//           if (!i.children) {
//             i.children = [{
//               value: 'zj-nb',
//               label: '宁波',
//             }, {
//               value: 'zj-hz',
//               label: '杭州',
//             }];
//             asyncValue.push('zj-nb');
//           } else if (val[1] === 'zj-hz') {
//             i.children.forEach((j) => {
//               if (j.value === 'zj-hz') {
//                 j.children = [{
//                   value: 'zj-hz-xh',
//                   label: '西湖区',
//                 }];
//                 asyncValue.push('zj-hz-xh');
//               }
//             });
//             colNum = 3;
//           }
//         }
//       });
//     } else {
//       colNum = 1;
//     }
//     this.setState({
//       data: d,
//       cols: colNum,
//       asyncValue,
//     });
//   };
//   getSel() {
//     const value = this.state.pickerValue;
//     if (!value) {
//       return '';
//     }
//     const treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);
//     return treeChildren.map(v => v.label).join(',');
//   }
//   render() {
//     const { getFieldProps } = this.props.form;
//     return (<div>
//       <WhiteSpace size="lg" />
//       <List style={{ backgroundColor: 'white' }} className="picker-list">
//         <Picker data={district} cols={1} {...getFieldProps('district3')} className="forss">
//           <List.Item arrow="horizontal">选择地区（单列）</List.Item>
//         </Picker>
//         >
//       </List>
//     </div>);
//   }
// }

// const TestWrapper = createForm()(Test);



const Recovered = () => (<div>
  <Title />
</div>);

const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(Recovered);
