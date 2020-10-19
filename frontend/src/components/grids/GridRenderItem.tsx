import React, { useState, useEffect }  from 'react';
import { isEmpty, trim } from 'lodash';
import axiosUtils from '@/utils/axios-utils';

import { BoardWidget, ImageWidget, TextWidget, AreaChartWidget, PieChartWidget, ScatterPlotWidget, TopologyChartWidget, GaugeRadialChartWidget, TimelineWidget } from '@/components/widgets';
import {
    LAYOUT_TYPE_BOARD,
    LAYOUT_TYPE_CHART_AREA,
    LAYOUT_TYPE_CHART_PIE,
    LAYOUT_TYPE_CHART_PIE_ACTIVESHAPE,
    LAYOUT_TYPE_CHART_SCATTER,
    LAYOUT_TYPE_CHART_TOPOLOGY,
    LAYOUT_TYPE_CHART_RADIAL,
    LAYOUT_TYPE_IMAGE,
    LAYOUT_TYPE_TEXT,
    LAYOUT_TYPE_O_TIMELINE,
    BOARD_DATA_DUMMY,
    PIE_CHART_DUMMY,
    PIE_ACTIVE_SHAPE_DUMMY,
    SCATTER_PLOT_DUMMY,
    TOPOLOGY_DATA_DUMMY,
    RADIAL_DATA_DUMMY,
    TIMELINE_DATA_DUMMY
} from '@/constants';
import { getAreaChartData } from '@/utils/chart-utils';
import { PieActiveShapeChartWidget } from '../widgets/PieActiveShapeChartWidget';

interface GridRenderItemProps {
    item: any;
}

const GRID_BOARD_PER_PAGE_NUM = 7;

const GridRenderItem: React.FC<GridRenderItemProps> = ({ item }) => {
    const [ data, setData ] = useState<Array<any>>([]);
    const [ tplyData, setTpLyData ] = useState<any>();
    const [ totNum, setTotNum ] = useState<number>(0);
    const [ rowPerPage, setRowPerPage ] = useState<number>(1);
    const [ page, setPage ] = useState<number>(1);

    useEffect(() => {
        if(!isEmpty(item)) {
            getMethodData();
        }
    }, [item]);

    const getMethodData = () => {
        let jsonData = item.wgDefault;

        if(!isEmpty(item.jsonUrl)) {
            if(item.method === 'POST') {
                switch(item.wgGb) {
                    case LAYOUT_TYPE_BOARD:
                        // rowPerPage -> item.h * GRID_BOARD_PER_PAGE_NUM
                        setPage(1);
                        setRowPerPage(item.h * GRID_BOARD_PER_PAGE_NUM);
                        setTotNum(BOARD_DATA_DUMMY.length);
                        setData(BOARD_DATA_DUMMY);
                        break;
                    case LAYOUT_TYPE_CHART_AREA:
                        axiosUtils.post(item.jsonUrl, { params: item.methodParams }).then((res: any) => {
                            setData(getAreaChartData(res[item.respObjNm]));
                        });
                        break;
                    case LAYOUT_TYPE_CHART_PIE:
                        setData(PIE_CHART_DUMMY);
                        break;
                    case LAYOUT_TYPE_CHART_PIE_ACTIVESHAPE:
                        setData(PIE_ACTIVE_SHAPE_DUMMY);
                        break;
                    case LAYOUT_TYPE_CHART_SCATTER:
                        setData(SCATTER_PLOT_DUMMY);
                        break;
                    case LAYOUT_TYPE_CHART_TOPOLOGY:
                        setTpLyData(TOPOLOGY_DATA_DUMMY);
                        break;
                    case LAYOUT_TYPE_CHART_RADIAL:
                        setData(RADIAL_DATA_DUMMY);
                        break;
                    case LAYOUT_TYPE_O_TIMELINE:
                        setData(TIMELINE_DATA_DUMMY);
                        break;
                };
            } else {
                switch(item.wgGb) {
                    case LAYOUT_TYPE_BOARD:
                        setPage(1);
                        setRowPerPage(item.h * GRID_BOARD_PER_PAGE_NUM);
                        setTotNum(BOARD_DATA_DUMMY.length);
                        setData(BOARD_DATA_DUMMY);
                        break;
                    case LAYOUT_TYPE_CHART_AREA:
                        axiosUtils.get(item.jsonUrl, { params: item.methodParams }).then((res: any) => {
                            setData(getAreaChartData(res[item.respObjNm]));
                        });
                        break;
                    case LAYOUT_TYPE_CHART_PIE:
                        setData(PIE_CHART_DUMMY);
                        break;
                    case LAYOUT_TYPE_CHART_PIE_ACTIVESHAPE:
                        setData(PIE_ACTIVE_SHAPE_DUMMY);
                        break;
                    case LAYOUT_TYPE_CHART_SCATTER:
                        setData(SCATTER_PLOT_DUMMY);
                        break;
                    case LAYOUT_TYPE_CHART_TOPOLOGY:
                        setTpLyData(TOPOLOGY_DATA_DUMMY);
                        break;
                    case LAYOUT_TYPE_CHART_RADIAL:
                        setData(RADIAL_DATA_DUMMY);
                        break;
                    case LAYOUT_TYPE_O_TIMELINE:
                        setData(TIMELINE_DATA_DUMMY);
                        break;
                };
            }
        } else {
            if(item.wgGb === LAYOUT_TYPE_CHART_TOPOLOGY) {
                setTpLyData(jsonData);
            } else {
                setData(jsonData);
            }
        }
    };

    const handlePage = (page: number) => {
        setPage(page);
    };

    const renderElement = () => {
        if(isEmpty(item)) { return }
        if (item.wgGb === LAYOUT_TYPE_BOARD) {
            return <BoardWidget title={item.wgTitle} total={totNum} data={data} rowPerPage={rowPerPage} onChange={handlePage} />;
        } else if (item.wgGb === LAYOUT_TYPE_IMAGE) {
            return <ImageWidget title={item.wgTitle} imageUrl={item.pageUrl} text={item.option1} />;
        } else if (item.wgGb === LAYOUT_TYPE_TEXT) {
            return (
                <TextWidget
                    title={item.wgTitle}
                    text={item.option1}
                    subtext={item.option2}
                />
            );
        } else if (item.wgGb === LAYOUT_TYPE_CHART_AREA) {
            let arrYPvts = item.option2.split(',');

            arrYPvts = arrYPvts.map((opt: string) => { return trim(opt) });

            return (
                <AreaChartWidget
                    id={item.i}
                    title={item.wgTitle}
                    data={data}
                    xPvt={item.option1}
                    yPvts={arrYPvts}
                    height="100%"
                />
            );
        } else if (item.wgGb === LAYOUT_TYPE_CHART_PIE) {
            return (
                <PieChartWidget title={item.wgTitle} data={data} />
            );
        } else if (item.wgGb === LAYOUT_TYPE_CHART_PIE_ACTIVESHAPE) {
            return (
                <PieActiveShapeChartWidget title={item.wgTitle} data={data} />
            );
        } else if (item.wgGb === LAYOUT_TYPE_CHART_SCATTER) {
            return (
                <ScatterPlotWidget title={item.wgTitle} data={data} />
            );
        } else if (item.wgGb === LAYOUT_TYPE_CHART_TOPOLOGY) {
            return (
                <TopologyChartWidget title={item.wgTitle} data={tplyData} />
            );
        } else if (item.wgGb === LAYOUT_TYPE_CHART_RADIAL) {
            return (
                <GaugeRadialChartWidget title={item.wgTitle} data={data} />
            );
        } else if(item.wgGb === LAYOUT_TYPE_O_TIMELINE) {
            return (
                <TimelineWidget title={item.wgTitle} data={data} />
            );
        } else {
            console.log('not supported item type');
        }
    };

    return (
        <>
            {(item && renderElement()) || (
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#ffffff',
                    }}
                >
                    Empty DIV
                </div>
            )}
        </>
    );
};

export { GridRenderItem };
