import React from "react";
import "./Menu.css";
import Content from "../component/content/content";
import { Link } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import { useHistory } from "react-router-dom";
import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";
import IconDashboard from "@material-ui/icons/Dashboard";
import IconShoppingCart from "@material-ui/icons/ShoppingCart";
import IconPeople from "@material-ui/icons/People";
import IconBarChart from "@material-ui/icons/BarChart";
import IconLibraryBooks from "@material-ui/icons/LibraryBooks";
const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: "100%",
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: "#97c05c",
    },
  })
);
export default function Menu({ pass }) {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <div
        className={pass.passShow() ? "left-menu-bar" : "left-menu-bar close"}
        onMouseLeave={() => pass.passSetShow(false)}
        // onMouseEnter={() => pass.passSetShow(true)}
      >
        {
          <div className={pass.passShow() ? "menus" : "menus close"}>
            <List component="nav" className={classes.appMenu} disablePadding>
              School Management System AAA
              <ListItem
                onClick={() => history.push({ pathname: "/" })}
                button
                className={classes.menuItem}
              >
                <ListItemIcon className={classes.menuItemIcon}>
                  <IconDashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem
                onClick={() => history.push({ pathname: "/class" })}
                button
                className={classes.menuItem}
              >
                <ListItemIcon className={classes.menuItemIcon}>
                  <IconShoppingCart />
                </ListItemIcon>
                <ListItemText primary="Class" />
              </ListItem>
              <ListItem
                onClick={() => history.push({ pathname: "/teacher" })}
                button
                className={classes.menuItem}
              >
                <ListItemIcon className={classes.menuItemIcon}>
                  <IconShoppingCart />
                </ListItemIcon>
                <ListItemText primary="Teacher" />
              </ListItem>
              <ListItem
                onClick={() => history.push({ pathname: "/student" })}
                button
                className={classes.menuItem}
              >
                <ListItemIcon className={classes.menuItemIcon}>
                  <IconPeople />
                </ListItemIcon>
                <ListItemText primary="Student" />
              </ListItem>
              <ListItem button className={classes.menuItem}>
                <ListItemIcon className={classes.menuItemIcon}>
                  <IconBarChart />
                </ListItemIcon>
                <ListItemText primary="Reports" />
              </ListItem>
              <ListItem
                button
                onClick={handleClick}
                className={classes.menuItem}
              >
                <ListItemIcon className={classes.menuItemIcon}>
                  <IconLibraryBooks />
                </ListItemIcon>
                <ListItemText primary="Nested Pages" />
                {open ? <IconExpandLess /> : <IconExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Divider />
                <List component="div" disablePadding>
                  <ListItem button className={classes.menuItem}>
                    <ListItemText inset primary="Nested Page 1" />
                  </ListItem>
                  <ListItem button className={classes.menuItem}>
                    <ListItemText inset primary="Nested Page 2" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </div>
        }
      </div>
    </>
  );
}
