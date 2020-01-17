import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareOutlined from "@material-ui/icons/ShareOutlined";
import withStyles from "@material-ui/core/styles/withStyles";

import ActiveLink from "./ActiveLink";
import { signoutUser } from "../lib/auth";
import Layout from "../components/Layout/Layout";
import Login from "../pages/auth/login";

const Navbar = ({ classes, router, pageProps }) => {
  // const { user } = auth ;
  const { user = {} } = pageProps.auth || {};

  return (
    <div>
      {user._id ? (
        <Layout auth={pageProps.auth} />
      ) : (
        // <AppBar
        //   className={classes.appBar}
        //   //   position={router.pathname === "/" ? "fixed" : "static"}
        // >
        //   <Toolbar>
        //     {/* <Typography
        //       variant="h5"
        //       component="h1"
        //       className={classes.toolbarTitle}
        //     >
        //       <ActiveLink href="/">Contact Manager</ActiveLink>
        //     </Typography> */}

        //     <div>
        //       <Button>
        //         <ActiveLink href="/auth/login">Sign In </ActiveLink>
        //       </Button>
        //       <Button>
        //         <ActiveLink href="/auth/signup">Sign up </ActiveLink>
        //       </Button>
        //     </div>
        //     {/*{user._id ? (*/}
        //     {/*  //Auth navigation*/}
        //     {/*  <div>*/}
        //     {/*    <Button>*/}
        //     {/*      <ActiveLink href={`/profile/${user._id}`}>Profile </ActiveLink>*/}
        //     {/*    </Button>*/}
        //     {/*    <Button onClick={signoutUser} variant="outlined">*/}
        //     {/*      {" "}*/}
        //     {/*      Sign out{" "}*/}
        //     {/*    </Button>*/}
        //     {/*  </div>*/}
        //     {/*) : (*/}
        //     {/*  //Auth navigation*/}
        //     {/*  <div>*/}
        //     {/*    <Button>*/}
        //     {/*      <ActiveLink href="/auth/login">Sign In </ActiveLink>*/}
        //     {/*    </Button>*/}
        //     {/*    <Button>*/}
        //     {/*      <ActiveLink href="/auth/signup">Sign up </ActiveLink>*/}
        //     {/*    </Button>*/}
        //     {/*  </div>*/}
        //     {/*)}*/}
        //   </Toolbar>
        // </AppBar>
        <Login />
      )}
    </div>
  );
};

const styles = theme => ({
  appBar: {
    // z-index 1 higher than the fixed drawer in home page to clip it under the navigation
    zIndex: theme.zIndex.drawer + 1
    // backgroundColor: "#1976d2"
  },
  toolbarTitle: {
    flex: 1
  },
  icon: {
    marginRight: theme.spacing.unit
  }
});

export default withStyles(styles)(Navbar);
