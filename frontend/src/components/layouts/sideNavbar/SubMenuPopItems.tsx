import React from "react";
import { MenuProps } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import MenuPopItem from "./MenuPopItem";

const styles = {
  subMenuItem: {
    display: "flex",
    justifyContent: "space-between"
  }
};

interface SubMenuPopItemsProps extends MenuProps  {
    id: any;
    key: string;
    menuItems: any;
    caption: string;
    open: boolean;
};

const SubMenuPopItems : React.FC<SubMenuPopItemsProps> = (props) => {
    const [ menuOpen, setMenuOpen ] = React.useState(false);
    const [ anchorEl, setAnchorEl ] = React.useState(null);

    const handleItemClick = (event : any) => {
        if (!anchorEl) {
            setAnchorEl(event.currentTarget);
        }

        setMenuOpen(!menuOpen);
    };

    const handleSubMenuClose = () => {
        setMenuOpen(false);
    };

    return (
      <React.Fragment>
        <MenuItem
          onClick={handleItemClick}
        >
            { props.caption }
            <ArrowRightIcon />
        </MenuItem>
        <MenuPopItem
          id={props.id}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          open={menuOpen}
          menuItems={props.menuItems}
          anchorEl={anchorEl}
          onClose={handleSubMenuClose}
          style={{ left: '-55px'}}
        />
      </React.Fragment>
    )
}

export default SubMenuPopItems;
