import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, FusionTheme);

const Column3D = ({ data }) => {
  const chartConfigs = {
    type: "column3d",
    width: "400",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Popular",
        theme: "fusion",
        yAxisName: "Stars",
        xAxisName: "Repos",
        xAxisNameFontSize: "16px",
        yAxisNameFontSize: "16px"
      },
      data
    }
  };

  return <ReactFC {...chartConfigs} />;
};

export default Column3D;
