import React from "react";
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,} from "recharts";
import {Sale} from "../types";
import {Box, Typography} from "@mui/material";

interface SalesChartProps {
  data: Sale[];
}

const SalesChart: React.FC<SalesChartProps> = ({data}) => {
  return (
      <Box>
        <Typography>Retail Sales</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="weekEnding"/>
            <YAxis hide/>
            <Tooltip/>
            <Legend/>
            <Line
                dot={false}
                dataKey="retailSales"
                stroke="#8884d8"
                type="basis"
            />
            <Line
                dot={false}
                dataKey="wholesaleSales"
                stroke="#82ca9d"
                type="basis"
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
  );
};

export default SalesChart;
