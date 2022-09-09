import React from "react";
import { Chart } from "react-google-charts";

function Map() {
                
const data = [
                ["Country","Color"],
                ["United States" ,8],
                ["Turkey" ,8],
                ["Germany" ,8],
                ["SWITZERLAND" ,8],
                ["Netherlands" ,8],
                ["Lebanon" ,8],
                ["Syria" ,10],
              ];
              const options = {
                colors : 'red'};
              
              
  return (
   <div className="m-auto my-8 w-4/5">

                 <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
          },
        }
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
   </div>
  );
}
export default Map;