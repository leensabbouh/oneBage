import React from 'react';
import { Chart } from "react-google-charts";

export const data =[
  ["الخيار", "النسبة"],
  ["نعم", 0.567],
  ["لا", 0.418],
  ["وثيقة تطوع", 0.01],
  ["لا أعرف", 0.005]
]

export const options = {
  title: "هل لديك نسخة مصورة من عقد العمل؟",
  slices:{0:{color:'#FF8181'},1:{color:'#91B5F0'},2:{color:'#C399FD'},3:{color:'#F7FF5B'}},
  pieHole: 0.4,
  is3D: false,
};

 function YesOrNo2() {
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

      
 
export default YesOrNo2