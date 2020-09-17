import React from 'react';

interface MuiIconProps {
    icon: string;
}

const MuiIcon: React.FC<MuiIconProps> = ({ icon }) => {
    let resolved = require(`@material-ui/icons/${icon}`).default;
    return React.createElement(resolved);
};

export {MuiIcon};
