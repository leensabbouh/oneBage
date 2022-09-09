import React from 'react';
import { Chart } from "react-google-charts";

export const data=[
  ["الخيار", "النسبة"],
  ["نعم", 0.716],
  ["لا", 0.246],
  ["لا أعرف", 0.038]
]

export const options = {
  title: "هل هناك عقد عمل موثق بينك وبين الجمعية/المنظمة التي تعملين بها؟",
  slices:{0:{color:'#FF8181'},1:{color:'#91B5F0'},2:{color:'#F7FF5B'}},
  pieHole: 0.4,
  is3D: false,
};


 function YesOrNo() {
  return <div  className='m-auto'>
    <Chart
      chartType="PieChart"
      width="500px"
      height="500px"
      data={data}
      options={options}
    />
  </div> 
}

      
 
export default YesOrNo