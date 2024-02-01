// CustomPieChart.jsx
import React, { useState, useCallback } from "react";
import { PieChart, Pie, Sector } from "recharts";

const data = [
  { name: "Learning", value: 330 },
  { name: "Training", value: 10 },
  { name: "Competition", value: 1000 },
  { name: "Bonus", value: 50 }
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos * 0.92;
  const my = cy + (outerRadius + 30) * sin;
//   Distance of the second arc
  const ex = mx + (cos >= 0 ? 1 : -1) * 8;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
       fill="#999"
      >{`${(percent * 100).toFixed(2)}%`}</text>
    </g>
  );
};

const CustomPieChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div style={{ width: "100%", height: "100%"}}>
      <PieChart width={window.innerWidth*0.35} height={window.innerWidth*0.35}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="42%"
          cy="40%"
          innerRadius={window.innerWidth*0.07}
          outerRadius={window.innerWidth*0.09}
          fill='#011F5B'
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </div>
  );
};

export default CustomPieChart;
