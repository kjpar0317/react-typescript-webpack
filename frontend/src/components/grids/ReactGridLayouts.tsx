import React, { useState, useEffect } from 'react';

import { Responsive, WidthProvider } from 'react-grid-layout';

import { GridRenderItem } from './GridRenderItem';
import { CIconButton } from '@/components/buttons';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

interface GridLayoutProps {
    layouts: Array<any>;
    items: Array<any>;
    width?: number;
    mounted?: boolean;
    isDroppable?: boolean;
    isEdit?: boolean;
    onLayoutChange?(layouts: Array<any>): void;
}

const ReactGridLayouts = React.memo<GridLayoutProps>((props) => {
    const { items, width, mounted, isDroppable, isEdit } = props;
    const [layouts, setLayouts] = useState<Array<any>>(props.layouts);
    let [maxConunt, setMaxCount] = useState<number>(props.layouts.length);

    useEffect(() => {
        // window.dispatchEvent(new Event('resize'));
        var event = document.createEvent('Event');
        event.initEvent('resize', false, true);
        // args: string type, boolean bubbles, boolean cancelable
        window.dispatchEvent(event);
    }, [width]);

    const onLayoutChange = (val: any) => {
        setLayouts(val);

        props.onLayoutChange && props.onLayoutChange(layouts);
    };

    const onResize = (val: any) => {
        setLayouts(val);
    };

    const onDrop = (layout: any, layoutItem: any, event: any) => {
        layout.map((l: any, index: number) => {
            if (l.i === '__dropping-elem__') {
                l.i = (maxConunt + 1).toString();
            }

            // l.i = (index + 1).toString();
        });

        setLayouts(layout);
        setMaxCount(++maxConunt);
    };

    const onDelete = (id: string) => {
        const filteredLayout = layouts.filter((f: any) => {
            return f.i !== id;
        });

        // filteredLayout.map((layout: any, index: number) => {
        //     layout.i = (index + 1).toString();
        // });

        setLayouts(filteredLayout);
        // setMaxCount(--maxConunt);
    };

    return (
        <ResponsiveReactGridLayout
            onResize={onResize}
            layout={layouts}
            onLayoutChange={onLayoutChange}
            onDrop={onDrop}
            breakpoints={{ lg: 1280, md: 800, sm: 600, xs: 0, xxs: 0 }}
            cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
            margin={[10, 10]}
            measureBeforeMount={false}
            useCSSTransforms={mounted}
            isDroppable={isDroppable}
        >
            {layouts &&
                layouts.map((layout: any, index: number) => {
                    const filter: any = items.filter(
                        (data: any) => data.i === layout.i,
                    );

                    return (
                        <div className="item" key={layout.i} data-grid={layout}>
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
    );
});

export { ReactGridLayouts };
