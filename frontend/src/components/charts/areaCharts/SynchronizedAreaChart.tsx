import React from 'react';
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    XAxisProps,
    YAxisProps,
} from 'recharts';

interface SynchronizedAreaChart {
    syncId?: string | undefined;
    data: Array<any>;
    xPvt: string;
    yPvts: Array<string>;
    height?: number | string | undefined;
    strokeDasharray?: string | undefined;
    storkColors?: Array<string> | undefined;
    fillColors?: Array<string> | undefined;
    xRange?: XAxisProps['domain'];
    yRange?: YAxisProps['domain'];
}

const defaultStorkColors = ['#82ca9d', '#8884d8'];
const defaultFillColors = ['#82ca9d', '#8884d8'];

const SynchronizedAreaChart: React.FC<SynchronizedAreaChart> = (props) => {
    const {
        syncId = 'anyId',
        data,
        xPvt,
        yPvts,
        height = '300px',
        strokeDasharray = '3 3',
        storkColors = defaultStorkColors,
        fillColors = defaultFillColors,
        xRange,
        yRange,
    } = props;

    return (
        <div style={{ width: '100%', height: height }}>
            <ResponsiveContainer>
                <AreaChart
                    data={data}
                    syncId={syncId}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray={strokeDasharray} />
                    <XAxis dataKey={xPvt} domain={xRange} />
                    <YAxis domain={yRange} />
                    <Tooltip />
                    {yPvts.map((yPvt: string, index: number) => {
                        return (
                            <Area
                                key={`inarea-${index}`}
                                type="monotone"
                                dataKey={yPvt}
                                stroke={storkColors[index]}
                                fill={fillColors[index]}
                            />
                        );
                    })}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export { SynchronizedAreaChart };
