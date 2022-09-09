import React from 'react';
import { Chart } from "react-google-charts";

export const data =[
  ["الخيار", "النسبة"],
  ["نعم", 0.896],
  ["لا", 0.05],
  ["قيد الوضع", 0.004],
  ["لا أعرف", 0.05]
]

export const options = {
  title: "هل بوجد نظام داخلي للجمعية/المنظمة التي تعملين بها؟",
   slices:{0:{color:'#FF8181'},1:{color:'#91B5F0'},2:{color:'#C399FD'},3:{color:'#F7FF5B'},},
  pieHole: 0.4,
  is3D: false,
};

              
function N() {
  return (<div  className='m-auto mr-2.5'>
  <Chart
    chartType="PieChart"
    width="500px"
      height="500px"
    data={data}
    options={options}
  />
</div>
 
   
  )
}

export default N