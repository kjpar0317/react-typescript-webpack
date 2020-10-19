import React, { useState, useEffect } from 'react';
import { sumBy } from 'lodash';

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Sector
} from 'recharts';

interface ActiveShapePieChartProps {
    colors?: Array<string>;
    data: Array<any>;
}

const ActiveShapePieChart: React.FC<ActiveShapePieChartProps> = (props) => {
    const { colors = [], data } = props;
    const [activeIndex, setActiveIndex] = useState(0);
    const [totAllCnt, setTotAllCnt] = useState(0);

    useEffect(() => {
        setTotAllCnt(sumBy(data, 'value'));
    }, [data])

    const onActiveIndexEnter = (data: any, index: number) => {
        setActiveIndex(index);
    };

    const renderActiveShape = (props: any) => {
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
            value,
        } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 12) * cos;
        const sy = cy + (outerRadius + 12) * sin;
        const mx = cx + (outerRadius + 17) * cos;
        const my = cy + (outerRadius + 17) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <text
                    x={cx}
                    y={cy}
                    dy={8}
                    textAnchor="middle"
                    fill="#bbb"
                    style={{ fontSize: 25, fontWeight: 500 }}
                >
                    {totAllCnt}
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
                    fill="#333"
                >{`${payload.name} ${value}`}</text>
                <text
                    x={ex + (cos >= 0 ? 1 : -1) * 12}
                    y={ey}
                    dy={18}
                    textAnchor={textAnchor}
                    fill="#999"
                >
                    {`${(percent * 100).toFixed(2)}%`}
                </text>
            </g>
        );
    };

    return (
        <ResponsiveContainer
            width="100%"
            height="100%"
            debounce={5000}
        >
            <PieChart>
                <Pie
                    activeIndex={
                        activeIndex
                    }
                    activeShape={renderActiveShape}
                    data={data}
                    innerRadius="45%"
                    outerRadius="65%"
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={onActiveIndexEnter}
                >
                    {data.map(
                        (
                            entry: any,
                            index: number,
                        ) => (
                            <Cell
                                key={index}
                                fill={
                                    colors[
                                        index %
                                            colors.length
                                    ]
                                }
                            />
                        ),
                    )}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export { ActiveShapePieChart };
