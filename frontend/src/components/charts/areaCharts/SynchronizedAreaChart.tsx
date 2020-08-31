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
    yPvt: string;
    height?: number | string | undefined;
    strokeDasharray?: string | undefined;
    storkColor?: string | undefined;
    fillColor?: string | undefined;
    xRange?: XAxisProps['domain'];
    yRange?: YAxisProps['domain'];
}

const SynchronizedAreaChart: React.FC<SynchronizedAreaChart> = (props) => {
    const {
        syncId = 'anyId',
        data,
        xPvt,
        yPvt,
        height = '300px',
        strokeDasharray = '3 3',
        storkColor = '#82ca9d',
        fillColor = '#82ca9d',
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
                    <Area
                        type="monotone"
                        dataKey={yPvt}
                        stroke={storkColor}
                        fill={fillColor}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export { SynchronizedAreaChart };
