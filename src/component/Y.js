import React from 'react';
import { Chart } from "react-google-charts";

export const data =[
  ["الخيار", "النسبة"],
  ["نعم", 0.203],
  ["لا", 0.547],
  ["يوجد نعم عناية بالأطفال ..لكن أنا لست متزوجة", 0.00775],
  ["لا أعرف", 0.219],
  ["لا أخذة معي ولا يوجد لأني كنا بالمخيم", 0.00775],
  ["لست أم",  0.00775],
  ["اجلزة الأمومة كانت بغير المنظمة التي أعمل بها حاليا",  0.00775],
]

export const options = {
  title: "هل لدى الجمعية/المنطمة التي تعملين بها سياسة أو اجراءات مساعدة للعناية بطفلك/طفلتك أثناء أوقات عملك؟",
  slices:{0:{color:'#FF8181'},1:{color:'#91B5F0'},2:{color:'#617153'},3:{color:'#F7FF5B'},4:{color:'#FC97F2'},5:{color:'#97FCCD'},6:{color:'#ADF172'},},
  pieHole: 0.4,
  is3D: false,
};

 function Y() {
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

      
 
export default Y