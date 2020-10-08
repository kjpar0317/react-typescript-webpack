import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { makeStyles, createStyles } from '@material-ui/core/styles';

import { COMMON } from '@/features/commonSlice';
import { DASHBOARD, dashboardAction } from './slice';

import { ReactGridLayouts } from '@/components/grids';

const useStyles = makeStyles(() =>
    createStyles({
        dashboard: {
            display: 'flex',
            flexDirection: 'column',
            margin: '10px 10px 10px 10px',
        },
    }),
);

const DashboardFeatures: React.FC<{}> = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { customSidebar, windowSize } = useSelector((state) => state[COMMON]);
    const {
        isReady,
        activeIndex,
        publicLayout,
        privateLayouts,
        tempLayout,
    } = useSelector((state) => state[DASHBOARD]);
    const [items, setItems] = useState<any>([]);
    const [mounted, setMounted] = useState(false);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        handleLoadLayout();
    }, []);

    useEffect(() => {
        if (isReady) {
            setMounted(false);

            if (privateLayouts.length > 0) {
                setItems(privateLayouts[activeIndex]);

                if (tempLayout.length > 0) {
                    dispatch(dashboardAction.setTempLayout([]));
                }
            } else {
                setItems(publicLayout);
            }
        }
    }, [isReady, privateLayouts]);

    useEffect(() => {
        if (items.length > 0) {
            setMounted(true);
        }
    }, [items]);

    useEffect(() => {
        if (customSidebar) {
            setWidth(windowSize.width - 290);
        } else {
            setWidth(windowSize.width - 70);
        }
    }, [customSidebar]);

    const handleLoadLayout = async () => {
        dispatch(dashboardAction.loadLayouts());
    };

    return (
        <div className={classes.dashboard}>
            <ReactGridLayouts items={items} width={width} mounted={mounted} />
        </div>
    );
};

export default withRouter(DashboardFeatures);
