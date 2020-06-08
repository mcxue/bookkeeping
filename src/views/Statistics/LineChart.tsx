import React, {useEffect, useRef} from 'react';
import echarts from 'echarts';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 20px;
`;

const LineChart = (props:any) => {
  const container = useRef(null);
  const width = document.documentElement.clientWidth;
  const height = (document.documentElement.clientWidth) * 0.8;
  const {expenseArray,incomeArray,xArray} = props.value;
  useEffect(() => {
    // @ts-ignore
    container.current.style = `width: ${width}px;height:${height}px`;
    // @ts-ignore
    const myChart = echarts.init(container.current);
    const option = {
      tooltip: {},
      legend: {
        data: ['支出', '收入']
      },
      xAxis: {
        type: 'category',
        data: xArray
      },
      yAxis: {
        axisLabel:{
          rotate:-45
        },
        type: 'value'
      },
      series: [{
        name: '支出',
        data: expenseArray,
        type: 'line',
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#FF0000'
            }
          }
        },
      }, {
        name: '收入',
        data: incomeArray,
        type: 'line',
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#029292'
            }
          }
        },
      }
      ]
    };
    // @ts-ignore
    myChart.setOption(option);
  }, [expenseArray,height,incomeArray,width,xArray]);
  return <Wrapper ref={container}/>;
};

export {LineChart};