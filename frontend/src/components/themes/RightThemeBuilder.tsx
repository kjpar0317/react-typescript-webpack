import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    merge,
    cloneDeep,
    clone,
    filter,
    isEmpty,
    includes,
    sortBy,
} from 'lodash';

import { dashboardAction, dashboardSelector } from '@/features/dashboard/slice';
import { ReactGridLayouts } from '@/components/grids';
import { getLayouts } from '@/api';

export interface TargetBoxProps {}

const RightThemeBuilder: React.FC<TargetBoxProps> = () => {
    const dispatch = useDispatch();
    const { activeIndex, publicLayout, privateLayouts } = useSelector(
        dashboardSelector.all,
    );
    const [items, setItems] = useState<any>([]);
    const [tlayout, setTLayout] = useState<any>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        let layouts: Array<any> = [];

        if (privateLayouts.length > 0) {
            layouts = privateLayouts[activeIndex];
        } else {
            layouts = publicLayout;
        }

        setItems(layouts);
    }, []);

    useEffect(() => {
        if (privateLayouts.length > 0) {
            setItems(privateLayouts[activeIndex]);
        }
    }, [privateLayouts]);

    useEffect(() => {
        if (mounted) {
            let cloneItems: Array<any> = cloneDeep(items);
            // let cloneItems: Array<any> = items;

            cloneItems.map((layout: any) => {
                if (includes(layout.i, ',')) {
                    const tarr = layout.i.split(',');
                    layout.i = tarr[0];
                }
            });

            dispatch(dashboardAction.setTempLayout(cloneItems));
            setMounted(false);
        }
    }, [mounted]);

    const handleLayoutChange = (layouts: Array<any>) => {
        let cloneItems: Array<any> = cloneDeep(layouts);

        if (layouts.length > 0) {
            var bDropped = false;
            cloneItems.map((layout: any) => {
                if (includes(layout.i, ',')) {
                    const tarr = layout.i.split(',');
                    merge(layout, getLayouts(Number(tarr[1])));

                    setTLayout(layout);
                } else if (layout.i === '__dropping-elem__') {
                    // 드롭 중인 것??
                    bDropped = true;
                } else {
                    // 일반, 삭제
                    merge(layout, filter(items, (f) => f.i === layout.i)[0]);
                }
            });

            if (!isEmpty(tlayout)) {
                cloneItems.concat(tlayout);
                setTLayout({});
            }

            if (!bDropped) {
                setItems(cloneItems);
                setMounted(true);
            }
        } else {
            dispatch(dashboardAction.setTempLayout([]));
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {};

    return (
        // <div ref={drop} style={{ opacity }}>
        <div className="droptarget" onDrop={handleDrop}>
            <ReactGridLayouts
                items={items}
                isDroppable={true}
                isEdit={true}
                width={950}
                nEndLayoutId={privateLayouts[activeIndex].length}
                onLayoutChange={handleLayoutChange}
            />
        </div>
    );
};

export { RightThemeBuilder };
