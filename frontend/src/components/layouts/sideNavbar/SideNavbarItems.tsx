import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmpty, includes, split, join } from 'lodash';
import { useIntl } from 'react-intl';
import qs from 'qs';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';

import { COMMON } from '@/features/commonSlice';
import { MuiIcon } from '@/components/icons';

// React runtime PropTypes
export const AppMenuItemPropTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    role: PropTypes.array,
    link: PropTypes.string,
    items: PropTypes.array,
    fopen: PropTypes.bool,
};

// TypeScript compile-time props type, infered from propTypes
// https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88
type AppMenuItemPropTypes = PropTypes.InferProps<typeof AppMenuItemPropTypes>;
type AppMenuItemPropsWithoutItems = Omit<AppMenuItemPropTypes, 'items'>;

// Improve child items declaration
export type AppMenuItemProps = AppMenuItemPropsWithoutItems & {
    items?: AppMenuItemProps[];
    // setAnchorEl: (e) => void;
    setAnchorEl: (e: any) => void;
    setTargetId: (e: string) => void;
};

const useStyles = makeStyles((theme) =>
    createStyles({
        menuItem: {},
        menuItemIcon: {
            color: '#97c05c',
        },
        screen: theme.breakpoints.values,
    }),
);

const SideNavbarItem: React.FC<AppMenuItemProps> = (props) => {
    const { name, icon, role, link, fopen, items = [] } = props;
    const classes = useStyles();
    const { formatMessage } = useIntl();
    const { breakpoint, group, queryParams } = useSelector(
        (state) => state[COMMON],
    );
    const [open, setOpen] = React.useState(false);
    const history = useHistory();

    // let isSelected = link && link.startsWith(history.location.pathname);
    let isExpandable = items && items.length > 0;

    // Dynamic하게 변경되는것은 예외처리.. (나중에 다시 한번 생각해보자)
    isExpandable =
        ((name === 'w.public w.cloud' || name === 'w.private w.cloud') &&
            true) ||
        isExpandable;

    const query = !isEmpty(queryParams) ? `?${qs.stringify(queryParams)}` : '';

    let isSelected = link && link === history.location.pathname + query;

    React.useEffect(() => {
        if (breakpoint === 'sm') {
            setOpen(false);
            isExpandable = false;
        }
    }, [breakpoint]);

    React.useEffect(() => {
        if (!fopen) {
            setOpen(false);
        }
    }, [fopen]);

    const convertMenuItemNm = (menuNm: string) => {
        if (!menuNm.startsWith('w.')) {
            return menuNm;
        }
        return join(
            split(menuNm, ' ').map((menunm) => formatMessage({ id: menunm })),
            ' ',
        );
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (breakpoint != 'sm' && fopen) {
            setOpen(!open);
            isExpandable = false;
        }
    };

    const handlePopMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isExpandable && (!fopen || breakpoint === 'sm')) {
            props.setAnchorEl(e.currentTarget);
        }
        props.setTargetId(name);
    };

    const convmenu = convertMenuItemNm(name);

    // console.log(
    //     `name: ${name}, isExpandable : ${isExpandable}, open : ${open}, breakpoint : ${breakpoint}, fopen : ${fopen}`,
    // );

    const MenuItemRoot = (props: any) =>
        // <ListItem button className={classes.menuItem} component={SomePathLink} to={link}
        includes(role, group) && (
            <ListItem
                button
                className={classes.menuItem}
                component={React.forwardRef<HTMLAnchorElement, any>(
                    (props, ref) =>
                        link ? (
                            <Link to={link} {...props} ref={ref as any} />
                        ) : (
                            <Link
                                to={`${history.location.pathname}${query}`}
                                {...props}
                                ref={ref as any}
                            />
                        ),
                )}
                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                    handleClick(e)
                }
                selected={isSelected ? true : false}
            >
                {/* Display an icon if any */}
                {!!icon && (
                    <ListItemIcon
                        className={classes.menuItemIcon}
                        aria-controls={name}
                        aria-haspopup="true"
                        onClick={(e) => handlePopMenu(e)}
                    >
                        {/* {React.createElement(MuiIcon[icon])} */}
                        {<MuiIcon icon={icon} />}
                    </ListItemIcon>
                )}
                {breakpoint != 'sm' && fopen && (
                    <ListItemText primary={convmenu} inset={!icon} />
                )}
                {/* Display the expand menu if the item has children */}
                {isExpandable && !open && breakpoint != 'sm' && fopen && (
                    <IconExpandMore />
                )}
                {isExpandable && open && breakpoint != 'sm' && fopen && (
                    <IconExpandLess />
                )}
            </ListItem>
        );

    const MenuItemChildren = (props: any, isExpandable: boolean) =>
        includes(role, group) &&
        isExpandable && (
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Divider />
                <List component="div" disablePadding>
                    {items.map((item, index) => (
                        <SideNavbarItem {...item} key={index} fopen={fopen} />
                    ))}
                </List>
            </Collapse>
        );

    return (
        <>
            {MenuItemRoot(props)}
            {MenuItemChildren(props, isExpandable)}
        </>
    );
};

SideNavbarItem.propTypes = AppMenuItemPropTypes;

export default SideNavbarItem;
