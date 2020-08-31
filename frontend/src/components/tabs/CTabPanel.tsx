import React from 'react';

import Box from '@material-ui/core/Box';

interface CTabPanelProps {
    index: number | string;
    value: number | string;
    children: React.ReactNode;
}

const CTabPanel: React.FC<CTabPanelProps> = (props) => {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`ctabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
};

export { CTabPanel };
