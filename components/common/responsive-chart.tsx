"use client";

import { useRef, useEffect, useState } from "react";
import { useResizeObserver } from "@/hooks/use-resize-observer";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { cn } from "@/lib/utils";

interface ChartData {
  name: string;
  tickets: number;
}

interface ResponsiveChartProps {
  data: ChartData[];
  height?: number;
  className?: string;
}

export function ResponsiveChart({
  data,
  height = 300,
  className,
}: ResponsiveChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useResizeObserver(containerRef);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("w-full overflow-x-auto", className)}
      style={{
        height: height,
        minWidth: isMobile ? "100%" : "auto",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            fontSize={isMobile ? 12 : 14}
            interval={isMobile ? 1 : 0}
          />
          <YAxis 
            fontSize={isMobile ? 12 : 14}
            tickFormatter={(value) => value.toString()}
          />
          <Tooltip />
          <Legend
            wrapperStyle={{
              paddingTop: "20px",
              fontSize: isMobile ? "12px" : "14px",
            }}
          />
          <Line
            type="monotone"
            dataKey="tickets"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--primary))" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}