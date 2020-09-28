import React from 'react';

import { ImageWidget, TextWidget, AreaChartWidget } from '@/components/widgets';

interface GridRenderItemProps {
    item: any;
}

const GridRenderItem: React.FC<GridRenderItemProps> = ({ item }) => {
    const renderElement = () => {
        if (item.type === 'image') {
            return <ImageWidget data={item.data} />;
        } else if (item.type === 'text') {
            return <TextWidget data={item.data} />;
        } else if (item.type === 'areachart') {
            return (
                <AreaChartWidget
                    title="테스트 차트"
                    data={item.data}
                    xPvt={item.xPvt}
                    yPvts={item.yPvts}
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
