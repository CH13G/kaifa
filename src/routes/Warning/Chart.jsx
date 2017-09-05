import { Component } from 'react';
import GM from 'g2-mobile';
export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.chart = null;
    this.initChart = this.initChart.bind(this);
    this.id = `id-${new Date().getTime()}`;
    this.state = {
      width: '100vw',
      height: '80vw',
    };
  }

  componentDidMount() {
    const { data } = this.props;
    GM.Global.pixelRatio = 3;
    this.chart = new GM.Chart({
      id: this.id,
    });
    this.initChart(this.chart, data);
  }

  componentWillUpdate(props) {
    if (JSON.stringify(props) !== JSON.stringify(this.props)) {
      this.initChart(this.chart, props.data);
    }
  }

  initChart(node, data) {
    if (!Array.isArray(data) || data.length < 1) {
      return null;
    }
    const Util = GM.Util;
    const labelCss = {
      fill: '#979797',
      font: '14px san-serif',
      offset: 6,
    };
    node
    .source(data, {
      time: {
        type: 'timeCat',
        mask: 'MM:ss',
        tickCount: 3,
        range: [0, 1],
      },
      tem: {
        tickCount: 5,
        min: 0,
      },
    });
    node
      .axis('tem', {
        label: {
          fontSize: '14px',
        },
      })
    node
      .axis('time', {
        label: function (text, index, total) {
          const cfg = Util.mix({}, labelCss);
          // 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐
          if (index === 0) {
            cfg.textAlign = 'start';
          }
          if (index > 0 && index === total - 1) {
            cfg.textAlign = 'end';
          }
          return cfg;
        },
      });
    node
      .area()
      .position('time*tem')
      .shape('smooth')
      .style({
        opacity: 0.6,
      });
    node.render();
  }

  render() {
    const style = { ...this.state };
    return <canvas style={style} id={this.id} />;
  }
}
