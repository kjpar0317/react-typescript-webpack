import React, { useState } from 'react';
import { find, cloneDeep, set } from 'lodash';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { FormControlLabelProps } from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { CSwitch } from './CSwitch';

interface CSwitchGroupProps {
    title?: string | undefined;
    items: Array<any>;
    labelPlacement?: FormControlLabelProps['labelPlacement'];
    helperText?: string | undefined;
    row?: boolean;
    onChange?(items: any): any;
}

const CSwitchGroup: React.FC<CSwitchGroupProps> = (props) => {
    const { title, items, labelPlacement, helperText, row } = props;
    const [sitems, setSitems] = useState(items);

    const handleChange = (checked: boolean, target: any) => {
        // setSitems({ ...sitems, [target.id]: checked });
        let cloneItems: any = cloneDeep(sitems);
        let obj = find(cloneItems, ['id', target.id]);

        set(obj, 'checked', checked);

        setSitems(cloneItems);

        props.onChange && props.onChange(cloneItems);
    };

    return (
        <FormControl component="fieldset">
            {title && <FormLabel component="legend">{title}</FormLabel>}
            <FormGroup row={row}>
                {items &&
                    items.map((initem: any, index: number) => {
                        return (
                            <CSwitch
                                key={`inselect-${index}`}
                                label={initem.label}
                                id={initem.id}
                                type={initem.type}
                                checked={initem.checked}
                                disabled={initem.disabled}
                                labelPlacement={labelPlacement}
                                onChange={handleChange}
                            />
                        );
                    })}
            </FormGroup>
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
};

export { CSwitchGroup };
