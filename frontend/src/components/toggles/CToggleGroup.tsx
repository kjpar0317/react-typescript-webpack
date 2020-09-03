import React, { useState } from 'react';

import ToggleButton, { ToggleButtonProps } from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Tooltip from '@material-ui/core/Tooltip';

interface CToggleProps {
    id: string;
    items: Array<any>;
    defaultValue?: string | number | undefined;
    size?: ToggleButtonProps['size'];
    orientation?: 'horizontal' | 'vertical' | undefined;
    onChange?(item: string | number | undefined): any;
}

const CToggleGroup: React.FC<CToggleProps> = (props) => {
    const { id, items, size, orientation, defaultValue } = props;
    const [alignment, setAlignment] = useState<string | number | undefined>(
        defaultValue,
    );

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | number | undefined,
    ) => {
        setAlignment(newAlignment);

        props.onChange && props.onChange(newAlignment);
    };

    const MuiIcon = ({ icon }) => {
        let resolved = require(`@material-ui/icons/${icon}`).default;
        return React.createElement(resolved);
    };

    return (
        <ToggleButtonGroup
            aria-label={id}
            value={alignment}
            size={size}
            orientation={orientation}
            exclusive
            onChange={handleAlignment}
        >
            {items &&
                items.map((item: any, index: number) => {
                    return (
                        <Tooltip key={`tooltip-${index}`} title={item.name}>
                            <ToggleButton
                                value={item.id}
                                aria-label={`${id}-${item.id}`}
                            >
                                <MuiIcon icon={item.icon} />
                            </ToggleButton>
                        </Tooltip>
                    );
                })}
        </ToggleButtonGroup>
    );
};

export { CToggleGroup };
