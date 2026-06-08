import * as React from "react";
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";

import { ThemeContext } from "../../context/themeContext";

function GaugePointer({ color }) {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={5}
        fill={color}
      />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke={color}
        strokeWidth={3}
      />
    </g>
  );
}

export default function CompositionExample({ data }) {
  const { theme } = React.useContext(ThemeContext);

  return (
    <GaugeContainer
      width={180}
      height={100}
      startAngle={-90}
      endAngle={90}
      value={data}
    >
      <GaugeReferenceArc />

      <GaugeValueArc
        sx={{
          fill: theme?.color || "#299D91",
        }}
      />

      <GaugePointer
        color={theme?.color || "#299D91"}
      />
    </GaugeContainer>
  );
}