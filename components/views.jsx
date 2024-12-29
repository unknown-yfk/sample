"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { useState } from "react";

// Sample chart data
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

// Chart configuration
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#ffffff", 
  },
};

export function Views() {
  const [selectedChart, setSelectedChart] = useState("Лінійна діаграма");
  const [selectedRange, setSelectedRange] = useState("D");

  const chartOptions = ["Лінійна діаграма", "Стовпчаста діаграма", "Кругова діаграма"];
  const rangeOptions = ["D", "W", "M", "Y"];


  const getLineColor = (value) => {
    return value >= 100 ? "#80F8BF" : "#ffffff"; 
  };

  return (
    <Card className="bg-gray-1000 text-gray-300 border-0"> 
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div>
            <CardTitle className="text-white">$17,230,00</CardTitle>
            <CardDescription className="text-gray-400">$17,230,00</CardDescription>
          </div>
         
        </div>

        {/* Filter UI */}
        <div className="flex items-center justify-between">
          {/* Chart Selector */}
          <div className="relative">
            <button className="flex items-center bg-gray-800 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-700">
              <TrendingUp className="text-blue-500 w-5 h-5 mr-2" />
              <span>{selectedChart}</span>
            </button>
          </div>

          {/* Range Selector */}
          <div className="flex gap-4 bg-gray-800 px-4 py-2 rounded-md">
            {rangeOptions.map((range) => (
              <button
                key={range}
                onClick={() => setSelectedRange(range)}
                className={`px-4 py-2 rounded-md ${
                  selectedRange === range
                    ? "bg-blue-500 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="border-0">
          {/* Removed border */}
          <LineChart
            accessibilityLayer
            data={chartData}
            height={80} // Reduced chart height to 150
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} stroke="#555" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)} // Display first 3 letters of month
              stroke="#bbb" // Adjust axis line color for contrast
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
              tickMargin={10}
              stroke="#bbb"
            />
            <Tooltip content={<ChartTooltipContent hideLabel />} cursor={false} />
            <Line
              dataKey="desktop"
              type="linear"
              stroke={getLineColor(chartData[chartData.length - 1].desktop)} // Dynamic color based on the value
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
