
import React, { Component } from "react";
import Chart from "react-google-charts";

function YorN() {
  return (
    <div className='m-auto'>
     <Chart
    width={"500px"}
    height={"500px"}
    chartType="PieChart"
    loader={<div>Loading Pie Chart</div>}
   
    data={[
      ["الخيار", "النسبة"],
      ["نعم", 0.873],
      ["لا", 0.067],
      ["لا أعرف", 0.06]
    ]}
    options={{
      title: "هل الجمعية/المنظمة التي تغملين بها مسجلة أو مرخصة في بلد ما؟",
      slices:{0:{color:'#FF8181'},1:{color:'#91B5F0'},2:{color:'#F7FF5B'}},
      is3D: true
    }}
  /></div>
  )
}

export default YorN