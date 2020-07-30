import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import Popover from '@material-ui/core/Popover';

import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'

// React runtime PropTypes
export const AppMenuItemPropTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
  width: PropTypes.string,
  fopen: PropTypes.bool,
}

// TypeScript compile-time props type, infered from propTypes
// https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88
type AppMenuItemPropTypes = PropTypes.InferProps<typeof AppMenuItemPropTypes>
type AppMenuItemPropsWithoutItems = Omit<AppMenuItemPropTypes, 'items'>

// Improve child items declaration
export type AppMenuItemProps = AppMenuItemPropsWithoutItems & {
    items?: AppMenuItemProps[];
    // setAnchorEl: (e) => void;
    setAnchorEl: (e) => void;
    setTargetId: (e) => void;
}

const useStyles = makeStyles(theme => createStyles({
      menuItem: {},
      menuItemIcon: {
        color: '#97c05c',
      },
      screen: theme.breakpoints.values
    }),
);

const SideNavbarItem: React.FC<AppMenuItemProps> = props => {
  const { id, name, link, Icon, items = [] } = props;
  const classes = useStyles();
  let isExpandable = items && items.length > 0;
  const [open, setOpen] = React.useState(false);
  let history = useHistory();

  React.useEffect(() => {
    if(props.width == 'sm') {
        setOpen(false);
        isExpandable = false;
    }
  }, [props.width]);

  React.useEffect(() => {
      if(!props.fopen) {
        setOpen(false);
      }
  }, [props.fopen]);

  const handleClick = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(props.width != 'sm' && props.fopen) {
        setOpen(!open);
        isExpandable = false;
    }
  };

  const handlePopMenu = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(isExpandable && (!props.fopen || props.width == 'sm')) {
        props.setAnchorEl(e.currentTarget);
    }
    props.setTargetId(id);
  }

  const MenuItemRoot = (props : any) => (
    // <ListItem button className={classes.menuItem} component={SomePathLink} to={link}
    <ListItem button className={classes.menuItem}
        component={
            React.forwardRef<HTMLAnchorElement, any>((props, ref) => link ? <Link to={link} {...props} ref={ref as any}/> : <Link to={history.location.pathname} {...props} ref={ref as any} />)
        }
        onClick={(e) => handleClick(e) }>
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon className={classes.menuItemIcon} aria-controls={id} aria-haspopup="true" onClick={(e) => handlePopMenu(e)}>
          <Icon />
        </ListItemIcon>
      )}
      { props.width != 'sm' && props.fopen && <ListItemText primary={name} inset={!Icon} /> }
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && props.width != 'sm' && props.fopen && <IconExpandMore />}
      {isExpandable && open && props.width != 'sm' && props.fopen && <IconExpandLess />}
    </ListItem>
  );

  const MenuItemChildren = (props, isExpandable) => (
    isExpandable && <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <SideNavbarItem {...item} key={index} fopen={props.fopen}/>
        ))}
      </List>
    </Collapse>
  );

  return (
    <>
      {MenuItemRoot(props)}
      {MenuItemChildren(props, isExpandable)}
    </>
  )
}

SideNavbarItem.propTypes = AppMenuItemPropTypes

export default withWidth()(SideNavbarItem);
