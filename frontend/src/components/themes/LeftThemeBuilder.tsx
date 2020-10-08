import React, { useState, useEffect } from 'react';

import { GridLayoutItem } from '@/components/grids/GridLayoutItem';
import { getLayouts } from '@/api';

const LeftThemeBuilder: React.FC = () => {
    const [items, setItems] = useState<any>([]);

    useEffect(() => {
        // getLayouts().then((res: any) => {
        //     console.log(res);
        //     setItems(res);
        // });
        setItems(getLayouts());
    }, []);

    return (
        <>
            {items &&
                items.map((item: any, index: number) => (
                    <div
                        key={index}
                        style={{
                            width: '100%',
                            height: '300px',
                            transform: 'scale(0.8)',
                        }}
                    >
                        <GridLayoutItem item={item} />
                    </div>
                ))}
        </>
    );
};

export { LeftThemeBuilder };
