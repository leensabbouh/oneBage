import React from 'react'
import { Chart } from "react-google-charts";

// export const data = [
//   ["المدة", "النسبة"],
//   ["أقل من شهر", 1000],
//   ["بين شهر لشهرين", 1170],
//   ["3أشهر", 660],
//   ["أكثر من 3أشهر", 1030],
// ];
// export const options = {
//   colors:'#FF8181'
// };

              

function Avarage() { 
var chart_data = [
  ["المدة", "النسبة"],
   ["أقل من شهر", 56],
   ["بين شهر لشهرين", 24],
   ["3أشهر", 16.42],
    ["أكثر من 3أشهر", 2.2],
 ];
  return (
    <div className='m-auto w-4/5'>
              <div>
     <Chart
         width="100%"
         height="400px"
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={chart_data}
        options={{
          colors:'#FF8181'
        }}
      /></div>

    </div>
  )
}

export default Avarage 