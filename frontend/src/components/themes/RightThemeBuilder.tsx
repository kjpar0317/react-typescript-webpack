import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { merge, cloneDeep, filter, includes, pick } from 'lodash';

import { dashboardAction, dashboardSelector } from '@/features/dashboard/slice';
import { ReactGridLayouts } from '@/components/grids';
import { getLayouts } from '@/api';
import { CDialog } from '@/components/dialogs';
import { WidgetUserSettings } from './layout/WidgetUserSettings';

export interface TargetBoxProps {}

const RightThemeBuilder: React.FC<TargetBoxProps> = () => {
    const dispatch = useDispatch();
    const { formatMessage } = useIntl();
    const {
        activeIndex,
        publicLayout,
        privateLayouts,
        tempLayout,
    } = useSelector(dashboardSelector.all);
    const [items, setItems] = useState<any>([]);
    const [mounted, setMounted] = useState(false);
    const [openSetting, setOpenSetting] = useState(false);
    const [selLayout, setSelLayout] = useState<any>({});

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
            if (tempLayout.length === 0) {
                setItems(privateLayouts[activeIndex]);
            }
        }
    }, [privateLayouts]);

    useEffect(() => {
        if (mounted) {
            let cloneItems: Array<any> = cloneDeep(items);

            cloneItems.map((layout: any) => {
                if (includes(layout.i, ',')) {
                    const tarr = layout.i.split(',');
                    layout.i = tarr[0];
                }
            });

            console.log(cloneItems);

            dispatch(dashboardAction.setTempLayout(cloneItems));

            setMounted(false);
        }
    }, [mounted]);

    const handleLayoutChange = (layouts: Array<any>) => {
        if (layouts.length > 0) {
            var bDropped = false;
            layouts.map((layout: any) => {
                if (includes(layout.i, ',')) {
                    const tarr = layout.i.split(',');
                    merge(layout, getLayouts(Number(tarr[1])));

                    // setTLayout(layout);
                } else if (layout.i === '__dropping-elem__') {
                    // 드롭 중인 것??
                    bDropped = true;
                } else {
                    // 일반, 삭제
                    const previnfo = filter(items, (f) => f.i === layout.i);

                    if (previnfo.length > 0) {
                        merge(
                            layout,
                            pick(previnfo[0], [
                                'wgId',
                                'wgGb',
                                'wgType',
                                'wgTitle',
                                'method',
                                'pageUrl',
                                'jsonUrl',
                                'params',
                                'respObjNm',
                                'option1',
                                'option2',
                                'option3',
                                'option4',
                                'option5',
                                'wgDefault'
                            ]),
                        );
                    }
                }
            });

            if (!bDropped) {
                setItems(layouts);
                setMounted(true);
            }
        }
    };

    const handleLayoutSetting = (id: string) => {
        const filtered = items.filter((f: any) => f.i === id);

        if (filtered.length > 0) {
            // console.log(filtered[0]);
            setSelLayout(filtered[0]);
            setOpenSetting(true);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {};

    const handleUpdateSetting = () => {
        alert('ddddd');
    };

    const handleCloseSetting = () => {
        setOpenSetting(false);
    };

    const handleUpdateUserSettings = (data: any) => {
        console.log(data);
    };

    return (
        // <div ref={drop} style={{ opacity }}>
        <div className="droptarget" onDrop={handleDrop}>
            <ReactGridLayouts
                items={items}
                isDroppable={true}
                isEdit={true}
                width={950}
                onLayoutChange={handleLayoutChange}
                onLayoutSetting={handleLayoutSetting}
            />
            <CDialog
                id="settingsDlg"
                title={ formatMessage({id: 'w.t.multi'}, {arg0: formatMessage({id: 'w.user'}), arg1: formatMessage({id: 'w.setting'})})}
                modules={['update', 'close']}
                open={openSetting}
                onUpdate={handleUpdateSetting}
                onClose={handleCloseSetting}
            >
                {selLayout && <WidgetUserSettings {...selLayout} onChange={handleUpdateUserSettings} />}
            </CDialog>
        </div>
    );
};

export { RightThemeBuilder };
