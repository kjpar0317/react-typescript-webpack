import React, { useState, useEffect }  from 'react';
import { isEmpty } from 'lodash';
import axiosUtils from '@/utils/axios-utils';

import { ImageWidget, TextWidget, AreaChartWidget } from '@/components/widgets';
import {
    LAYOUT_TYPE_CHART_AREA,
    LAYOUT_TYPE_IMAGE,
    LAYOUT_TYPE_TEXT,
} from '@/constants';
import { getAreaChartData } from '@/utils/chart-utils';

interface GridRenderItemProps {
    item: any;
}

const GridRenderItem: React.FC<GridRenderItemProps> = ({ item }) => {
    const [ data, setData ] = useState<any>();

    useEffect(() => {
        if(!isEmpty(item)) {
            getMethodData();
        }
    }, [item]);

    const getMethodData = async() => {
        let jsonData = item.wgDefault;

        if(!isEmpty(item.jsonUrl)) {
            if(item.method === 'POST') {
                jsonData = await axiosUtils.post(item.jsonUrl, { params: item.methodParams });
            } else {
                jsonData = await axiosUtils.get(item.jsonUrl, { params: item.methodParams });
            }

            const chartData = getAreaChartData(jsonData[item.respObjNm]);

            setData(chartData);
        } else {
            setData(jsonData);
        }
    };

    const renderElement = () => {
        if(isEmpty(item)) { return }
        if (item.wgGb === LAYOUT_TYPE_IMAGE) {
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
            return (
                <AreaChartWidget
                    id={item.i}
                    title={item.wgTitle}
                    data={data}
                    xPvt={item.option1}
                    yPvts={item.option2}
                    height="100%"
                />
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
