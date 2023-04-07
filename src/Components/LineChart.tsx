import React from 'react'
import { Chart }  from 'react-chartjs-2'
import 'chart.js/auto';
function ChartLine({spark}) {
  let arr:[]=[]
  let sparkToshow = () => {
    for(let i=0; spark.length >i ; i=i+13){
        arr.push(spark[i])
    }
  }
  sparkToshow();
 console.log(arr[arr.length-1] , arr[0] )
  const data = {
    type: 'line',
    labels:Array(arr.length).fill(' '),
    datasets: [{
      scaleShowLabels : false,
      label: '7 days',
      data:  arr,
      fill: false,
      borderColor: arr[arr.length-1] > arr[0]  ? '#05ff00' : '#ff0000',
      tension: 0,
      borderDashOffset: false,
      borderWidth: 2,
      pointRadius: 0
    }],

  };
  const options = {
    legend: {
      labels: {
        usePointStyle: false
      }
    },
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
    
    <Chart  type='line' data={data} options={options}/>
    
  )
}

export default ChartLine