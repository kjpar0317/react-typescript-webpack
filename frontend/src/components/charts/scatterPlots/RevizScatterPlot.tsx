import React, { useState, useEffect } from 'react';

import { ScatterPlot, ChartZoomPan, LinearXAxis, LinearXAxisTickSeries, LinearXAxisTickLabel, ScatterSeries, ScatterPoint } from 'reaviz';

interface RevizScatterPlotProps {
    data: Array<any>;
    size?: number;
}

const RevizScatterPlot: React.FC<RevizScatterPlotProps> = (props) => {
    const { data, size = 7 } = props;
    const [ sdata, setSData ] = useState<Array<any>>(data);

    useEffect(() => {
        setSData(data);
    }, [data]);

    return (
        <div style={{ width: '98%', height: '95%' }}>
            <ScatterPlot data={sdata} margins={20} zoomPan={<ChartZoomPan />}
                xAxis={
                    <LinearXAxis
                    type="time"
                    tickSeries={
                        <LinearXAxisTickSeries
                        label={<LinearXAxisTickLabel rotation={false} />}
                        />
                    }
                    />
                }
            />
        </div>
    );
};

export { RevizScatterPlot };
