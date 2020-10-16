import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { cloneDeep } from 'lodash';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import {
    LAYOUT_TYPE_CHART_AREA,
    LAYOUT_TYPE_IMAGE,
    LAYOUT_TYPE_TEXT,
} from '@/constants';
import { CTextField } from '@/components/textfields';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tbData: {
            width: '100%',
            tableLayout: 'fixed',
            borderCollapse: 'collapse',
            fontWeight: 300,
            fontSize: '9pt',

            '& th': {
                width: '125px',
                height: '40px',
                padding: '5px 10px',
                border: '1px solid #dfe6e8',
                background: '#f7f9fa',
                color: '#0a2348',
                textTransform: 'uppercase',
                textAlign: 'left',
                wordBreak: 'break-all',
            },

            '& td': {
                padding: '5px 10px',
                border: '1px solid #dfe6e8',
                background: '#fff',
                textAlign: 'left',
                color: '#667285',
                wordBreak: 'break-all',
            },
        },
    }),
);

const WidgetUserSettings: React.FC = (props: any) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();
    const { wgGb, wgTitle, method, pageUrl, jsonUrl, params, respObjNm, option1, option2, option3, option4, option5 } = props;
    const [ textProps, setTextProps ] = useState<any>(props);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const cloneitem = cloneDeep(textProps);

        cloneitem[e.target.id] = e.target.value;

        setTextProps(cloneitem);

        props.onChange && props.onChange(cloneitem);
    };

    const generateTextTemplate = () => {
        return (
            <table className={classes.tbData}>
                <tbody>
                    <tr>
                        <th>
                            { formatMessage({id: 'w.title'}) }
                        </th>
                        <td>
                            <CTextField id='wgTitle' type='text' defaultValue={wgTitle} value={textProps.wgTitle} onChange={handleChange} required />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            { formatMessage({id: 'w.content'}) }
                        </th>
                        <td>
                            <CTextField id='option1' type='text' onChange={handleChange} value={textProps.option1} required />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            { formatMessage({id: 'w.subtitle'}) }
                        </th>
                        <td>
                            <CTextField id='option2' type='text' onChange={handleChange} value={textProps.option2} />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    };

    const generateChartAreaTemplate = () => {
        return (
            <table className={classes.tbData}>
                <tbody>
                    <tr>
                        <th>
                            { formatMessage({id: 'w.title'}) }
                        </th>
                        <td>
                            <CTextField id='wgTitle' type='text' defaultValue={wgTitle} value={textProps.wgTitle} onChange={handleChange} required />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            { formatMessage({id: 'w.xpvt'}) }
                        </th>
                        <td>
                            <CTextField id='option1' type='text' defaultValue={option1} onChange={handleChange} value={textProps.option1}  />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            { formatMessage({id: 'w.ypvts'}) }
                        </th>
                        <td>
                            <CTextField id='option2' type='text' defaultValue={option2} value={textProps.option2} onChange={handleChange} required />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            { formatMessage({id: 'w.xrange'}) }
                        </th>
                        <td>
                            <CTextField id='option3' type='text' defaultValue={option3} value={textProps.option3} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            { formatMessage({id: 'w.method'}) }
                        </th>
                        <td>
                            <CTextField id='method' type='text' defaultValue={method} value={textProps.method} onChange={handleChange} required />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            { formatMessage({id: 'w.jsonUrl'}) }
                        </th>
                        <td>
                            <CTextField id='jsonUrl' type='text' defaultValue={jsonUrl} value={textProps.jsonUrl} onChange={handleChange} required />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            { formatMessage({id: 'w.params'}) }
                        </th>
                        <td>
                            <CTextField id='params' type='text' defaultValue={params} value={textProps.params} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            { formatMessage({id: 'w.respObjNm'}) }
                        </th>
                        <td>
                            <CTextField id='respObjNm' type='text' defaultValue={respObjNm} value={textProps.respObjNm} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            { formatMessage({id: 'w.backgroundColor'}) }
                        </th>
                        <td>
                            <CTextField id='option4' type='text' defaultValue={option4} value={textProps.option4} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            { formatMessage({id: 'w.borderColor'}) }
                        </th>
                        <td>
                            <CTextField id='option5' type='text' defaultValue={option5} value={textProps.option5} onChange={handleChange} />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    };

    const generateImageTemplate = () => {
        return (
            <table className={classes.tbData}>
                <tbody>
                    <tr>
                        <th>
                            { formatMessage({id: 'w.title'}) }
                        </th>
                        <td>
                            <CTextField id='wgTitle' type='text' defaultValue={wgTitle} value={textProps.wgTitle} onChange={handleChange} required />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            { formatMessage({id: 'w.imageUrl'}) }
                        </th>
                        <td>
                            <CTextField id='pageUrl' type='text' defaultValue={pageUrl} value={textProps.pageUrl} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            { formatMessage({id: 'w.text'}) }
                        </th>
                        <td>
                            <CTextField id='option1' type='text' defaultValue={option1} value={textProps.option1} onChange={handleChange} required />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    };

    return (
        <div>
            {wgGb === LAYOUT_TYPE_TEXT && generateTextTemplate()}
            {wgGb === LAYOUT_TYPE_IMAGE && generateImageTemplate()}
            {wgGb === LAYOUT_TYPE_CHART_AREA && generateChartAreaTemplate()}
        </div>
    );
};

export { WidgetUserSettings };
