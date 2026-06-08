import { ThemeContext } from '@emotion/react';
import { BarChart } from '@mui/x-charts/BarChart'; 
import * as React from "react";
import { ThemeContext } from "../../context/themeContext";

const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
      width: 60,
    },
  ],
  height: 300,
};

export function valueFormatter(value) {
  return `${value}mm`;
}

export default function BarsDataset(props) {
const { dataset } = props;
const { theme } = React.useContext(ThemeContext);

const expensesSeries = dataset.series.map((item) => item.dataKey === "amountLastWeek" ? {...item, color:theme.color} : item);

  return (
    <BarChart
      dataset={dataset.data}
      xAxis={[{ dataKey: dataset.dataKey, categoryGapRatio:0.5 }]}
      series={ expensesSeries }
      {...chartSetting}
    />
  );
}
