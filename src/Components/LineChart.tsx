import React from 'react'
import { Chart }  from 'react-chartjs-2'
import 'chart.js/auto';
function ChartLine({spark}) {

  const data = {
    type: 'line',
    labels:Array(10).fill(' '),
    datasets: [{
      scaleShowLabels : false,
      label: '',
      data:  spark.slice(0,10),
      fill: false,
      borderColor: spark[10] > spark[0]  ? '#05ff00' : '#ff0000',
      tension: 0.4,
      borderDashOffset: false,
   
    }],

  };
  const options = {
    scales: {
        x: {
            display: false // hide x-axis name
        },
        y: {
            display: false // show y-axis name
        }
    }
};
  return (
    <>
    <Chart  type='line' data={data} options={options}/>
    </>
  )
}

export default ChartLine