import React from 'react';

import { ImageWidget, TextWidget, AreaChartWidget } from '@/components/widgets';

interface GridRenderItemProps {
    item: any;
}

const LAYOUT_TYPE_CHART_AREA = 'CA';
const LAYOUT_TYPE_IMAGE = 'I';
const LAYOUT_TYPE_TEXT = 'T';

const GridRenderItem: React.FC<GridRenderItemProps> = ({ item }) => {
    const renderElement = () => {
        if (item.wgType === LAYOUT_TYPE_IMAGE) {
            return <ImageWidget title={item.wgTitle} data={item.wgItem} />;
        } else if (item.wgType === LAYOUT_TYPE_TEXT) {
            return (
                <TextWidget
                    title={item.wgTitle}
                    text={item.wgItem.text}
                    subtext={item.wgItem.subtext}
                />
            );
        } else if (item.wgType === LAYOUT_TYPE_CHART_AREA) {
            return (
                <AreaChartWidget
                    title={item.wgTitle}
                    data={item.wgItem.data}
                    xPvt={item.wgItem.xPvt}
                    yPvts={item.wgItem.yPvts}
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
