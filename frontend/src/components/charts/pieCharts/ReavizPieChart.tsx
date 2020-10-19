import React from 'react';

import { PieChart } from 'reaviz';

interface PieChartProps {
    data: Array<any>;
}

const ReavizPieChart: React.FC<PieChartProps> = (props) => {
    const { data } = props;

    return (
        <div style={{ width: '100%', height: '98%' }}>
            <PieChart data={data} displayAllLabels={true} />
        </div>
    );
};

export { ReavizPieChart };
