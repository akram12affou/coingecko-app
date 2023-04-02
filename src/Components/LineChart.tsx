import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
function LineChart({spark}) {
console.log(spark)
  const data = {
    type: 'line',
    labels:Array(40).fill(' '),
    datasets: [{
      axis: 'x',
      label: 'Coin in last 7 days',
      data: spark.slice(0,40),
      fill: false,
      borderColor: '#226b6f',
      tension: 0.3
    }]
  };
  return (
    <>
    <Line data={data} />
    
    </>
 

  )
}

export default LineChart