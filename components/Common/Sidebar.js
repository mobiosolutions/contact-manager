import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DomainIcon from "@material-ui/icons/Domain";
import DashboardIcon from '@material-ui/icons/Dashboard';
import ContactsIcon from "@material-ui/icons/Contacts";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import ReportIcon from "@material-ui/icons/Report";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import ActiveLink from "../ActiveLink";

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
});

const Sidebar = props => {
  const { open, handleDrawerClose, handleChangeTab, classes, theme } = props;
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ActiveLink href="/">
            <ListItemText primary="Dashboard" />
          </ActiveLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DomainIcon />
          </ListItemIcon>
          <ActiveLink href="/company">
            <ListItemText primary="Companies" />
          </ActiveLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactsIcon />
          </ListItemIcon>
          <ActiveLink href="/contact">
            <ListItemText primary="Contacts" />
          </ActiveLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ActiveLink href="/deals">
            <ListItemText primary="Deals" />
          </ActiveLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PlaylistAddCheckIcon />
          </ListItemIcon>
          <ActiveLink href="/task">
            <ListItemText primary="Tasks" />
          </ActiveLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </List>
      {/*<Divider />*/}
      {/*<List>*/}
      {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
      {/*        <ListItem button key={text}>*/}
      {/*            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
      {/*            <ListItemText primary={text} />*/}
      {/*        </ListItem>*/}
      {/*    ))}*/}
      {/*</List>*/}
    </Drawer>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Sidebar);
