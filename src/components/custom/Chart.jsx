import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from "recharts";
import { FaBitcoin } from "react-icons/fa6";

const chartData = [
  { date: "Jan", price: 30000 },
  { date: "Feb", price: 13000 },
  { date: "Mar", price: 42000 },
  { date: "Apr", price: 5000 },
  { date: "May", price: 39000 },
  { date: "Jun", price: 21000 },
];

const chartConfig = {
  price: {
    label: "Price (USD)",
    color: "hsl(var(--chart-1))",
  },
};

export default function Chart() {
  return (
    <Card className="bg-card p-6 rounded-lg border-none mb-6 w-full max-w-[1200px] mx-auto">
      <CardHeader className="flex items-start justify-between mb-4 ml-5">
        <div className="flex items-center gap-4">
          <FaBitcoin className="w-10 h-10 text-yellow-400" />
          <div>
            <CardTitle className="text-xl font-semibold text-text-primary">
              Bitcoin
            </CardTitle>
            <p className="text-green-400 text-md">$70,894.18 +1.5%</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[350px] flex justify-center">
        <ChartContainer config={chartConfig} className="w-full max-w-[1100px]">
          <AreaChart
            width={1100}
            height={300}
            data={chartData}
            margin={{ left: 20, right: 20, top: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: "hsl(var(--text-muted))" }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="price"
              type="monotone"
              fill="#3b82f6"
              fillOpacity={0.4}
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
