import React from 'react';

import { RadialGauge, RadialGaugeSeries } from 'reaviz';

interface ReavizRadialProps {
    colors: Array<string>;
    data: Array<any>;
}

const ReavizRadial: React.FC<ReavizRadialProps> = (props) => {
    const { colors, data } = props;

    return (
        <div style={{ width: '100%', height: '98%' }}>
            <RadialGauge data={data} series={<RadialGaugeSeries colorScheme={colors} />} />
        </div>
    );
};

export { ReavizRadial };
