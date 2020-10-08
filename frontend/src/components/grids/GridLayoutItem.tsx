import React from 'react';

import { GridRenderItem } from '@/components/grids';

interface GridLayoutItemProps {
    item: any;
}

const GridLayoutItem: React.FC<GridLayoutItemProps> = ({ item }) => {
    return (
        <div
            className="droptarget"
            draggable={true}
            unselectable="on"
            style={{ width: '100%', height: '100%' }}
            onDragStart={(e: any) => {
                e.dataTransfer.dropEffect = 'copy';
                // text/html
                e.dataTransfer.setData('text/plain', item.wgId);
            }}
        >
            <GridRenderItem item={item} />
        </div>
    );
};

export { GridLayoutItem };
