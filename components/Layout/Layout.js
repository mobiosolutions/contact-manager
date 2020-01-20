import React from "react";
import Router from "next/router";
import PropTypes from "prop-types";
import Menu from "@material-ui/core/Menu";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";

import Header from "../Common/Header";
import Sidebar from "../Common/Sidebar";
import { signoutUser } from "../../lib/auth";
import Dashboard from "../Dashboard/Dashboard";

const styles = theme => ({
  root: {
    display: "flex"
  }
});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: false,
    anchorEl: null,
    mobileMoreAnchorEl: null,
    tab: 0
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleChangeTab = (value, routePage) => {
    this.setState({ tab: value });
    Router.push("/company");
  };

  render() {
    const { classes, theme, pageProps } = this.props;
    console.log("layout", this.props);

    const { user = {} } = pageProps.auth || {};
    const { open, anchorEl, mobileMoreAnchorEl, tab } = this.state;

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={signoutUser}>Logout</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header
          user={user}
          isMenuOpen={isMenuOpen}
          handleDrawerOpen={this.handleDrawerOpen}
          handleProfileMenuOpen={this.handleProfileMenuOpen}
          handleMobileMenuOpen={this.handleMobileMenuOpen}
          open={open}
        />

        {renderMenu}
        {renderMobileMenu}
        <Sidebar
          handleDrawerClose={this.handleDrawerClose}
          handleChangeTab={this.handleChangeTab}
          open={open}
        ></Sidebar>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
