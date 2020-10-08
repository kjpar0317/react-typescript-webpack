import React from 'react';

import { LeftThemeBuilder } from './LeftThemeBuilder';
import { RightThemeBuilder } from './RightThemeBuilder';

interface ThemeBuilderProps {}

const ThemeBuilder: React.FC<ThemeBuilderProps> = () => {
    return (
        <>
            <div style={{ width: '20%', float: 'left' }}>
                <div
                    style={{
                        height: '700px',
                        overflowY: 'auto',
                        padding: '10px 10px 5px 10px',
                        backgroundColor: '#eeeeee',
                    }}
                >
                    <LeftThemeBuilder />
                </div>
            </div>
            <div style={{ width: '80%', float: 'left' }}>
                <div
                    style={{
                        width: '100%',
                        height: '700px',
                        overflowX: 'hidden',
                        overflowY: 'auto',
                        padding: '10px 10px 5px 10px',
                        backgroundColor: '#eeeeee',
                    }}
                >
                    <RightThemeBuilder />
                </div>
            </div>
        </>
    );
};

export { ThemeBuilder };
