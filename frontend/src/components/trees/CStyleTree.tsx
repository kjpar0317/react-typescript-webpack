import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem, { TreeItemProps } from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';

import { MuiIcon } from '@/components/icons';

declare module 'csstype' {
    interface Properties {
        '--tree-view-color'?: string;
        '--tree-view-bg-color'?: string;
    }
}

type StyledTreeItemProps = TreeItemProps & {
    bgColor?: string;
    color?: string;
    labelIcon?: string;
    labelInfo?: string;
    labelText: string;
};

const useTreeItemStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            color: theme.palette.text.secondary,
            '&:hover > $content': {
                backgroundColor: theme.palette.action.hover,
            },
            '&:focus > $content, &$selected > $content': {
                backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
                color: 'var(--tree-view-color)',
            },
            '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
                backgroundColor: 'transparent',
            },
        },
        content: {
            color: theme.palette.text.secondary,
            borderTopRightRadius: theme.spacing(2),
            borderBottomRightRadius: theme.spacing(2),
            paddingRight: theme.spacing(1),
            fontWeight: theme.typography.fontWeightMedium,
            '$expanded > &': {
                fontWeight: theme.typography.fontWeightRegular,
            },
        },
        group: {
            marginLeft: 0,
            '& $content': {
                paddingLeft: theme.spacing(2),
            },
        },
        expanded: {},
        selected: {},
        label: {
            fontWeight: 'inherit',
            color: 'inherit',
        },
        labelRoot: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0.5, 0),
        },
        labelIcon: {
            marginRight: theme.spacing(1),
        },
        labelText: {
            fontWeight: 'inherit',
            flexGrow: 1,
        },
    }),
);

const StyledTreeItem = (props: StyledTreeItemProps) => {
    const classes = useTreeItemStyles();
    const { labelText, labelIcon, labelInfo, color, bgColor, ...other } = props;

    return (
        <TreeItem
            label={
                <div className={classes.labelRoot}>
                    {labelIcon && <MuiIcon icon={labelIcon} />}
                    <Typography variant="body2" className={classes.labelText}>
                        {labelText}
                    </Typography>
                    <Typography variant="caption" color="inherit">
                        {labelInfo}
                    </Typography>
                </div>
            }
            style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor,
            }}
            classes={{
                root: classes.root,
                content: classes.content,
                expanded: classes.expanded,
                selected: classes.selected,
                group: classes.group,
                label: classes.label,
            }}
            {...other}
        />
    );
};

const useStyles = makeStyles(
    createStyles({
        root: {
            height: 264,
            flexGrow: 1,
            maxWidth: 400,
        },
    }),
);

const CStyleTreeItem = (props: any) => {
    const { item } = props;

    const MenuItemChildren = (item: any) => (
        <StyledTreeItem
            nodeId={item.id}
            labelText={item.name}
            labelIcon={item.icon}
            labelInfo={item.labelInfo}
            color={item.color}
            bgColor={item.bgColor}
        >
            {item.children &&
                item.children.map((subitem: any) => {
                    return <CStyleTreeItem item={subitem} />;
                })}
        </StyledTreeItem>
    );

    return MenuItemChildren(item);
};

interface CStyleTreeProps {
    items: Array<any>;
    defaultExpanded?: Array<string>;
    collapseIcon?: string;
    expandIcon?: string;
    onClick?(value: Array<any> | string): any;
}

const CStyleTree: React.FC<CStyleTreeProps> = (props) => {
    const {
        items,
        defaultExpanded,
        collapseIcon = 'ArrowDropDown',
        expandIcon = 'ArrowRight',
    } = props;
    const classes = useStyles();

    const onNodeSelect = (event: object, value: Array<any> | string) => {
        props.onClick && props.onClick(value);
    };

    return (
        <TreeView
            className={classes.root}
            defaultExpanded={defaultExpanded}
            defaultCollapseIcon={<MuiIcon icon={collapseIcon} />}
            defaultExpandIcon={<MuiIcon icon={expandIcon} />}
            defaultEndIcon={<div style={{ width: 24 }} />}
            onNodeSelect={onNodeSelect}
        >
            {items.map((item: any, index: number) => {
                return <CStyleTreeItem item={item} />;
            })}
        </TreeView>
    );
};

export { CStyleTree };
