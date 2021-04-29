// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 2 - Chart Data

// STEP 3 - Creating the JSON object to store the chart configurations
//* Pindahkan ke func chart component

//* STEP 4 - Creating the DOM element to pass the react-fusioncharts component
// class App extends React.Component {
//   render() {
//     return (<ReactFC {...chartConfigs} />);
//   }
// }

//* Bentuk awal dokumentasi^^

const ChartComponent = ({data}) => {
  const chartConfigs = {
    type: "doughnut2d", // The chart type //*alias
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Language starred",
        theme: "fusion",
        decimals: 0,
        doughnutRadius: "40%",
        showPercentValues: 0
      },
      // Chart Data
      data
      //* buat dynamic^ sebelumnya data:data dari props
    }
  };
  return (
    <ReactFC {...chartConfigs} />
  )
}

export default ChartComponent;