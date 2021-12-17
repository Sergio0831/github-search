import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Doughnut2D = ({ data }) => {
  const chartConfigs = {
    type: "doughnut2D",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Stars Per Language",
        decimals: 0,
        doughnutRadius: "35%",
        showPercentValues: 0,
        theme: "candy"
      },
      data
    }
  };

  return <ReactFC {...chartConfigs} />;
};

export default Doughnut2D;
