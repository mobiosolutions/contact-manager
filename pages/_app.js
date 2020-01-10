/* Next.js / MUI integration here: https://github.com/mui-org/material-ui/tree/master/examples/nextjs */
import App, { Container } from "next/app";
import Head from "next/head";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import JssProvider from "react-jss/lib/JssProvider";
import withNProgress from "next-nprogress";
// import NProgress from "next-nprogress/styles"
import NProgress from "next-nprogress/component";

import getPageContext from "../lib/getPageContext";
import Toolbar from "@material-ui/core/Toolbar";
import Sidebar from "../components/Layout/Sidebar";
import AppBar from "@material-ui/core/AppBar";
import Navbar from "../components/Navbar";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Contact Manager</title>
        </Head>
        {/* Wrap every page in Jss and Theme providers */}
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/*<Navbar {...this.props} />*/}

            <Navbar {...this.props} />
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server side. */}
            <Component pageContext={this.pageContext} {...pageProps} />
          </MuiThemeProvider>
        </JssProvider>
        <NProgress color="#e34234" spinner={false} />
      </Container>
    );
  }
}

const msDelay = 200;
const configOptions = { trickleSpeed: 50 };
export default withNProgress(msDelay, configOptions)(MyApp);
