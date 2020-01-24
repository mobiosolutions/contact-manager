import Router from "next/router";
import axios from "axios";

const WINDOW_USER_SCRIPT_VARIABLE = "__USER__";

export const getUserScript = user => {
  return `${WINDOW_USER_SCRIPT_VARIABLE} = ${JSON.stringify(user)};`;
};

export const getSessionFromServer = req => {
  if (req.user) {
    let user = req.user;
    return { user };
  }
  return {};
};

export const getSessionFromClient = () => {
  console.log("window", typeof window);
  if (typeof window !== "undefined") {
    const user = window[WINDOW_USER_SCRIPT_VARIABLE] || {};
    if (user._id) {
      return { user: user };
    }
    return { user: user.user };
  }
  return { user: {} };
};

const redirectUser = (res, path) => {
  if (res) {
    res.redirect(302, path);
    res.finished = true;
    return {};
  }
  Router.replace(path);
  return {};
};

export const authInitialProps = isProtectedRoute => ({
  req,
  res,
  query: { userId }
}) => {
  const auth = req ? getSessionFromServer(req) : getSessionFromClient();
  const currentPath = req ? req.url : window.location.pathname;
  const user = auth.user;
  const isAnonymous = !user;

  if (isProtectedRoute && isAnonymous && currentPath !== "/auth/login") {
    return redirectUser(res, "/auth/login");
  }
  return { auth, userId };
};

export const signupUser = async user => {
  const { data } = await axios.post("/api/user/signup", user);
  return data;
};

export const signinUser = async user => {
  const { data } = await axios.post("/api/user/signin", user);

  if (typeof window !== "undefined") {
    window[WINDOW_USER_SCRIPT_VARIABLE] = data || {};
  }
};

export const signoutUser = async () => {
  if (typeof window !== "undefined") {
    window[WINDOW_USER_SCRIPT_VARIABLE] = {};
  }

  await axios.get("/api/user/signout");
  Router.push("/auth/login");
  location.reload();
};
