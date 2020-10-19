import React, { useState, useEffect } from 'react';
import { keys, values } from 'lodash';

import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

interface BoardWidgetProps {
    title?: string;
    total: number;
    rowPerPage: number;
    data: Array<any>;
    onChange?(page: number): any;
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
    table: {

    },
}));

const BoardWidget: React.FC<BoardWidgetProps> = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const { title, total, rowPerPage, data } = props;

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
                            >
                                <MoreVertIcon />
                            </IconButton>
                        }
                    />
                )}
                {/* CardActionArea는 ie11을 지원안함 */}
                <CardActionArea classes={{ root: classes.area }}>
                    <CardContent classes={{ root: classes.content }}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableBody>
                                    {data.map((data: any, index: number) => {
                                        const arrkeys = keys(data);
                                        const arrvalues = values(data);

                                        return (
                                            <TableRow key={index}>
                                                { arrkeys.map((tkey: string, iindex: number) => {
                                                    if(iindex === 0) {
                                                        return <TableCell key={`sub-${iindex}`} component="th" scope="row" align="left">{data[tkey]}</TableCell>
                                                    } else {
                                                        return <TableCell key={`sub-${iindex}`} align="right">{data[tkey]}</TableCell>
                                                    }
                                                })}
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
};

export { BoardWidget };
