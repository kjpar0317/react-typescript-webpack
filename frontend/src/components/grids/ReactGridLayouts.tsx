import React, { useState, useEffect } from 'react';
import { pick, cloneDeep } from 'lodash';

import { Responsive, WidthProvider } from 'react-grid-layout';

import { GridRenderItem } from './GridRenderItem';
import { CIconButton } from '@/components/buttons';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

interface GridLayoutProps {
    items: Array<any>;
    width?: number;
    mounted?: boolean;
    isDroppable?: boolean;
    isEdit?: boolean;
    nEndLayoutId?: number;
    onLayoutChange?(layouts: Array<any>): void;
}

const ReactGridLayouts = React.memo<GridLayoutProps>((props) => {
    const {
        items,
        width,
        mounted,
        isDroppable,
        isEdit,
        nEndLayoutId = 0,
    } = props;
    const [layouts, setLayouts] = useState<Array<any>>([]);
    const [maxCount, setMaxCount] = useState<number>(nEndLayoutId + 1);

    useEffect(() => {
        if (items.length > 0) {
            let cloneItems = cloneDeep(items);

            let tlayouts = cloneItems.map((item) => {
                return pick(item, [
                    'i',
                    'x',
                    'y',
                    'w',
                    'h',
                    'minW',
                    'minH',
                    'maxW',
                    'maxH',
                    'static',
                ]);
            });

            setLayouts(tlayouts);
        }
    }, [items]);

    useEffect(() => {
        // window.dispatchEvent(new Event('resize'));
        var event = document.createEvent('Event');
        event.initEvent('resize', false, true);
        // args: string type, boolean bubbles, boolean cancelable
        window.dispatchEvent(event);
    }, [width]);

    const onLayoutChange = (val: any) => {
        // setLayouts(val);

        console.log(val);

        props.onLayoutChange && props.onLayoutChange(val);
    };

    const onResize = (val: any) => {
        setLayouts(val);
    };

    const onDrop = (layout: any, layoutItem: any, event: any) => {
        // console.log(layout);
        // console.log(layoutItem);
        // console.log(event.dataTransfer.getData('text/plain'));
        // let cloneItems = cloneDeep(layout);
        let cloneItems = cloneDeep(layout);
        cloneItems.map((item: any) => {
            if (item.i === '__dropping-elem__') {
                item.i =
                    maxCount.toString() +
                    ',' +
                    event.dataTransfer.getData('text/plain');
            }
        });

        console.log(cloneItems);

        setLayouts(cloneItems);
        setMaxCount(maxCount + 1);
    };

    const onDelete = (id: string) => {
        const filteredLayout = layouts.filter((f: any) => {
            return f.i !== id;
        });

        setLayouts(filteredLayout);
    };

    return (
        <div style={{ width: width }}>
            <ResponsiveReactGridLayout
                onResize={onResize}
                layout={layouts}
                onLayoutChange={onLayoutChange}
                onDrop={onDrop}
                breakpoints={{ lg: 1280, md: 800, sm: 600, xs: 0, xxs: 0 }}
                cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
                marin={[10, 10]}
                measureBeforeMount={true}
                mounted={mounted}
                isBounded={true}
                isDroppable={isDroppable}
            >
                {layouts &&
                    layouts.map((layout: any, index: number) => {
                        const filter: any = items.filter(
                            (data: any) => data.i === layout.i,
                        );

                        return (
                            <div
                                className="item"
                                key={layout.i}
                                data-grid={layout}
                            >
                                {isEdit && (
                                    <div
                                        style={{
                                            width: '100%',
                                            zIndex: 1,
                                            position: 'inherit',
                                        }}
                                    >
                                        <CIconButton
                                            type="btn4"
                                            icon="Clear"
                                            tooltip="Delete"
                                            size="small"
                                            style={{ float: 'right' }}
                                            onClick={() => onDelete(layout.i)}
                                        />
                                    </div>
                                )}
                                <GridRenderItem item={filter[0]} />
                            </div>
                        );
                    })}
            </ResponsiveReactGridLayout>
        </div>
    );
});

export { ReactGridLayouts };
