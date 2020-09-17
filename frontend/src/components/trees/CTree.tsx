import React, { useState } from 'react';

import SortableTree, {
    changeNodeAtPath,
    addNodeUnderParent,
    removeNodeAtPath,
} from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

import { CIconButton } from '@/components/buttons';
import { ContactSupportOutlined } from '@material-ui/icons';

interface CTreeProps {
    items: Array<any>;
    canEdit?: boolean;
    onClick?(node: any): any;
    onChange?(mode: string, info: any): any;
}

const CTree: React.FC<CTreeProps> = (props) => {
    const { items, canEdit = false } = props;
    const [treeData, setTreeData] = useState(items);
    const [addAsFirstChild] = useState(false);

    const getNodeKey = ({ treeIndex }) => treeIndex;

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
            generateNodeProps={({ node, path, parentNode }) => ({
                onClick: (event: any) => {
                    props.onClick && props.onClick(node);
                },
                title:
                    (canEdit && (
                        <input
                            style={{ fontSize: '1.1rem' }}
                            value={node.name as string}
                            onChange={(event) => {
                                const name = event.target.value;
                                const data = changeNodeAtPath({
                                    treeData: treeData,
                                    path,
                                    getNodeKey,
                                    newNode: { ...node, name },
                                });

                                setTreeData(data);

                                if (node.id) {
                                    props.onChange &&
                                        props.onChange('edit', {
                                            name: name,
                                            current: node,
                                        });
                                } else {
                                    props.onChange &&
                                        props.onChange('add', {
                                            name: name,
                                            parent: parentNode,
                                        });
                                }
                            }}
                        />
                    )) ||
                    node.name,
                buttons: [
                    (canEdit && (
                        <>
                            <CIconButton
                                type="btn1"
                                icon="Add"
                                size="small"
                                tooltip="Add Node"
                                onClick={() =>
                                    setTreeData(
                                        addNodeUnderParent({
                                            treeData: treeData,
                                            parentKey: path[path.length - 1],
                                            expandParent: true,
                                            getNodeKey,
                                            newNode: {
                                                name: 'Added',
                                            },
                                            addAsFirstChild: addAsFirstChild,
                                        }).treeData,
                                    )
                                }
                            >
                                Add Child
                            </CIconButton>
                            &nbsp;
                            <CIconButton
                                type="btn4"
                                icon="Delete"
                                size="small"
                                tooltip="Delete Node"
                                onClick={() => {
                                    setTreeData(
                                        removeNodeAtPath({
                                            treeData: treeData,
                                            path,
                                            getNodeKey,
                                        }),
                                    );

                                    props.onChange &&
                                        props.onChange('del', getNodeKey);
                                }}
                            >
                                Remove
                            </CIconButton>
                        </>
                    )) ||
                        '',
                ],
            })}
        />
    );
};

export { CTree };
