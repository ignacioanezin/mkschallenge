import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import lightTheme from '../../theme/lightTheme';
import {
    ValueType,
    NameType,
} from 'recharts/types/component/DefaultTooltipContent';
import styled from 'styled-components';
import Typography from '../Typography/Typography';

export interface FollowerDataPoint {
    day: number;
    followers: number; 
  }

export interface ChartProps {
    data: FollowerDataPoint[];
  }

  const fontStyles = {
    fontFamily: "Inter, sans-serif",
    fontSize: "12px",
  };

  const CustomTooltipContainer = styled.div`
    background-color: ${(props) => props.theme.colors.neutral.cardBg};
    border: 1px solid ${(props) => props.theme.colors.neutral.chart};
    width: 150px;
    height: 40px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    transform: translate(-57%, 38%);  
    `;



  const CustomTooltip = ({
    active,
    payload,
}: TooltipProps<ValueType, NameType>) => {
    if (active) {
    return (
        <CustomTooltipContainer>
            <Typography tag="span" weight="regular" size="s" style={{color: lightTheme.colors.neutral.chart}}>
            {`${payload?.[0].value} new followers`}
            </Typography>
        </CustomTooltipContainer>
    );
    }

    return null;
};


export const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
        }}
        
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" style={fontStyles} tickLine={false} tickMargin={5} stroke={lightTheme.colors.neutral.chartText} strokeWidth={2}/>
        <YAxis allowDecimals={false} style={fontStyles} tickLine={false} tickCount={7} stroke={lightTheme.colors.neutral.chartText} strokeWidth={2}/>
        <Tooltip content={<CustomTooltip/>} allowEscapeViewBox={{ y: true }}/>
        <Line type="monotone" dataKey="followers" stroke={lightTheme.colors.neutral.chart} activeDot={{ r: 10 }} dot={{r: 6, stroke: lightTheme.colors.neutral.chartDotSroke, strokeWidth: 2.5  }}/>
      </LineChart>
    </ResponsiveContainer>
  );
};

