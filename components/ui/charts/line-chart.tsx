"use client";

import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface ChartData {
  name: string;
  [key: string]: string | number;
}

interface LineChartProps {
  data: ChartData[];
  height?: number;
  lines: Array<{
    key: string;
    color: string;
  }>;
}

export function LineChart({ data, height = 300, lines }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="name"
          fontSize={12}
          tickMargin={10}
        />
        <YAxis
          fontSize={12}
          tickMargin={10}
        />
        <Tooltip />
        <Legend />
        {lines.map(({ key, color }) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={color}
            strokeWidth={2}
            dot={{ fill: color }}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}