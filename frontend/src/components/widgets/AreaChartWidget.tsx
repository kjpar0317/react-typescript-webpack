import React, { useState, useEffect } from 'react';
import { omit } from 'lodash';

import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { SynchronizedAreaChart } from '@/components/charts/areaCharts';
import { CDialog } from '@/components/dialogs';
import { CSwitchGroup } from '@/components/switchs';

interface AreaChartProps {
    id?: string | undefined;
    title?: string | undefined;
    data: Array<any>;
    xPvt: string;
    yPvts: Array<string>;
    height?: number | string | undefined;
    xRange?: any;
    yRange?: any;
    dlgTitle?: string | undefined;
    switchs?: Array<any> | undefined;
    children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
    },
    area: {
        height: '100%',
    },
    content: {
        height: '100%',
    },
}));

const AreaChartWidget: React.FC<AreaChartProps> = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const {
        id,
        title,
        data,
        xPvt,
        yPvts,
        height,
        xRange,
        yRange,
        switchs,
        dlgTitle,
        children,
    } = props;
    const [bData, setBData] = useState<any>(data);
    const [open, setOpen] = useState(false);

    const storkColors = [
        theme.palette.success.dark,
        theme.palette.info.dark,
        theme.palette.warning.dark,
        theme.palette.error.dark,
    ];
    const fillColors = [
        theme.palette.success.main,
        theme.palette.info.main,
        theme.palette.warning.main,
        theme.palette.error.main,
    ];

    useEffect(() => {
        data && setBData(data);
    }, [data]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSwitch = (arr: any) => {
        let tdata = new Array();

        data.map((obj: any) => {
            const arromit = new Array();
            yPvts.map((yPvt: string, index: number) => {
                if (!arr[index].checked) {
                    arromit.push(yPvt);
                }
            });

            tdata.push(omit(obj, arromit));
        });

        setBData(tdata);
    };

    return (
        <>
            <Card className={classes.root}>
                {title && (
                    <CardHeader
                        title={title}
                        titleTypographyProps={{ variant: 'h6' }}
                        style={{ textAlign: 'left' }}
                        action={
                            <IconButton
                                aria-label="settings"
                                onClick={handleOpen}
                            >
                                <MoreVertIcon />
                            </IconButton>
                        }
                    />
                )}
                {/* CardActionArea는 ie11을 지원안함 */}
                <CardActionArea classes={{ root: classes.area }}>
                    <CardContent classes={{ root: classes.content }}>
                        <SynchronizedAreaChart
                            syncId={id}
                            data={bData}
                            xPvt={xPvt}
                            yPvts={yPvts}
                            height={height}
                            xRange={xRange}
                            yRange={yRange}
                            storkColors={storkColors}
                            fillColors={fillColors}
                        />
                        {switchs && (
                            <CSwitchGroup
                                items={switchs}
                                labelPlacement="end"
                                onChange={handleSwitch}
                                row
                            />
                        )}
                    </CardContent>
                </CardActionArea>
            </Card>
            <CDialog
                id="wide-dlg"
                title={dlgTitle}
                open={open}
                modules={['close']}
                maxWidth="lg"
                onClose={handleClose}
            >
                {children}
            </CDialog>
        </>
    );
};

export { AreaChartWidget };
