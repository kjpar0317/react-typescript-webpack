import React, { useState } from 'react';

import SortableTree from 'react-sortable-tree';
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer';

interface CFileTreeProps {
    items: Array<any>;
    canEdit?: boolean;
    onClick?(node: any): any;
    onChange?(mode: string, info: any): any;
}

const CFileTree: React.FC<CFileTreeProps> = (props) => {
    const { items, canEdit = false } = props;
    const [treeData, setTreeData] = useState(items);

    // const alertNodeInfo = ({ node, path, treeIndex }) => {
    //     const objectString = Object.keys(node)
    //         .map((k) =>
    //             k === 'children' ? 'children: Array' : `${k}: '${node[k]}'`,
    //         )
    //         .join(',\n   ');

    //     global.alert(
    //         'Info passed to the icon and button generators:\n\n' +
    //             `node: {\n   ${objectString}\n},\n` +
    //             `path: [${path.join(', ')}],\n` +
    //             `treeIndex: ${treeIndex}`,
    //     );
    // };

    const handleMoveNode = ({ node, nextParentNode }) => {
        props.onChange &&
            props.onChange('move', {
                current: node,
                parentNode: nextParentNode,
            });
    };

    return (
        <SortableTree
            treeData={treeData}
            canDrag={canEdit}
            onChange={(treeData: any) => setTreeData(treeData)}
            onMoveNode={handleMoveNode}
            theme={FileExplorerTheme}
            generateNodeProps={(rowInfo) => ({
                title: rowInfo.node.name,
                onClick: (event: any) => {
                    props.onClick && props.onClick(rowInfo.node);
                },
                icons: rowInfo.node.isDirectory
                    ? [
                          <div
                              style={{
                                  borderLeft: 'solid 8px gray',
                                  borderBottom: 'solid 10px gray',
                                  marginRight: 10,
                                  boxSizing: 'border-box',
                                  width: 16,
                                  height: 12,
                                  filter: rowInfo.node.expanded
                                      ? 'drop-shadow(1px 0 0 gray) drop-shadow(0 1px 0 gray) drop-shadow(0 -1px 0 gray) drop-shadow(-1px 0 0 gray)'
                                      : 'none',
                                  borderColor: rowInfo.node.expanded
                                      ? 'white'
                                      : 'gray',
                              }}
                          />,
                      ]
                    : [
                          <div
                              style={{
                                  border: 'solid 1px black',
                                  fontSize: 8,
                                  textAlign: 'center',
                                  marginRight: 10,
                                  width: 12,
                                  height: 16,
                              }}
                          >
                              F
                          </div>,
                      ],
                // buttons: [
                //     <button
                //         style={{
                //             padding: 0,
                //             borderRadius: '100%',
                //             backgroundColor: 'gray',
                //             color: 'white',
                //             width: 16,
                //             height: 16,
                //             border: 0,
                //             fontWeight: 100,
                //         }}
                //         onClick={() => alertNodeInfo(rowInfo)}
                //     >
                //         i
                //     </button>,
                // ],
            })}
        />
    );
};

export { CFileTree };
