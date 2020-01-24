import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import Edit from "@material-ui/icons/Edit";
import withStyles from "@material-ui/core/styles/withStyles";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import moment from "moment";


import TextField from '@material-ui/core/TextField';
// import ProfileTabs from "../components/profile/ProfileTabs";
// import DeleteUser from "../components/profile/DeleteUser";
// import FollowUser from "../components/profile/FollowUser";
import { authInitialProps } from "../../lib/auth";
import {
    getUser
    //   deletePost,
    //   likePost,
    //   unlikePost,
    //   addComment,
    //   deleteComment
} from "../../lib/api";

class Index extends React.Component {
    state = {
        user: null,
        // posts: [],
        isAuth: false,
        isLoading: true
        // isFollowing: false,
        // isDeletingPost: false
    };

    componentDidMount() {
        // const { userId, auth } = this.props;
        // getUser(userId)
        //   .then(async user => {
        //     console.log(user);
        //     const isAuth = auth.user._id === userId;
        //     this.setState({
        //       user,
        //       //   posts,
        //       isAuth,
        //       //   isFollowing,
        //       isLoading: false
        //     });
        //   })
        //   .catch(err => console.error(err));
    }

    //   checkFollow = (auth, user) => {
    //     return (
    //       user.followers.findIndex(follower => follower._id === auth.user._id) > -1
    //     );
    //   };

    //   toggleFollow = sendRequest => {
    //     const { userId } = this.props;
    //     const { isFollowing } = this.state;

    //     sendRequest(userId).then(() => {
    //       this.setState({ isFollowing: !isFollowing });
    //     });
    //   };
    //   handleToggleLike = post => {
    //     const { auth } = this.props;
    //     const isPostLiked = post.likes.includes(auth.user._id);
    //     const sendRequest = isPostLiked ? unlikePost : likePost;

    //     sendRequest(post._id)
    //       .then(postData => {
    //         const postIndex = this.state.posts.findIndex(
    //           post => post._id === postData._id
    //         );
    //         const updatedPosts = [
    //           ...this.state.posts.slice(0, postIndex),
    //           postData,
    //           ...this.state.posts.slice(pimport Button from "@material-ui/core/es/Button/Button";ostIndex + 1)
    //         ];
    //         this.setState({ posts: updatedPosts });
    //       })
    //       .catch(err => {
    //         console.error(err);
    //       });
    //   };

    //   handleDeletePost = deletedPost => {
    //     this.setState({ isDeletingPost: true });
    //     deletePost(deletedPost._id)
    //       .then(postData => {
    //         const postIndex = this.state.posts.findIndex(
    //           post => post._id === postData._id
    //         );
    //         const updatedPosts = [
    //           ...this.state.posts.slice(0, postIndex),
    //           ...this.state.posts.slice(postIndex + 1)
    //         ];
    //         this.setState({ posts: updatedPosts, isDeletingPost: false });
    //       })
    //       .catch(err => {
    //         console.error(err);
    //         this.setState({ isDeletingPost: false });
    //       });
    //   };

    //   handleAddComment = (postId, text) => {
    //     const comment = { text };
    //     addComment(postId, comment)
    //       .then(postData => {
    //         const postIndex = this.state.posts.findIndex(
    //           post => post._id === postData._id
    //         );
    //         const updatedPosts = [
    //           ...this.state.posts.slice(0, postIndex),
    //           postData,
    //           ...this.state.posts.slice(postIndex + 1)
    //         ];
    //         this.setState({ posts: updatedPosts });
    //       })
    //       .catch(err => {
    //         console.error(err);
    //       });
    //   };

    //   handleDeleteComment = (postId, comment) => {
    //     deleteComment(postId, comment)
    //       .then(postData => {
    //         const postIndex = this.state.posts.findIndex(
    //           post => post._id === postData._id
    //         );
    //         const updatedPosts = [
    //           ...this.state.posts.slice(0, postIndex),
    //           postData,
    //           ...this.state.posts.slice(postIndex + 1)
    //         ];
    //         this.setState({ posts: updatedPosts });
    //       })
    //       .catch(err => console.error(err));
    //   };
    render() {
        const { classes, auth } = this.props;
        const {
            isLoading,
            posts,
            user,
            isAuth,
            isFollowing,
            isDeletingPost
        } = this.state;
        return (
            <Paper className={classes.root} elevation={4}>
                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    className={classes.title}
                    gutterBottom
                >
                    Add Contact
                </Typography>

                <form className={classes.container} noValidate autoComplete="off">

                    <TextField
                        id="outlined-email-input"
                        label="Name"
                        className={classes.textField}
                        type="text"
                        name="company_name"
                        autoComplete="name"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-title-input"
                        label="Title"
                        className={classes.textField}
                        type="text"
                        name="title"
                        autoComplete="title"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-company-input"
                        label="Company"
                        className={classes.textField}
                        type="text"
                        name="company"
                        autoComplete="company"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-description-input"
                        label="Description"
                        className={classes.textField}
                        type="text"
                        name="description"
                        autoComplete="description"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-tags-input"
                        label="Tags"
                        className={classes.textField}
                        type="text"
                        name="tags"
                        autoComplete="tags"
                        margin="normal"
                        variant="outlined"
                    />
                    <Typography
                        variant="h6" gutterBottom >
                        Contact Info
                    </Typography>
                    <Divider variant="middle" />
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        className={classes.textField}
                        type="text"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-work_phone-input"
                        label="Work Phone"
                        className={classes.textField}
                        type="text"
                        name="work_phone"
                        autoComplete="work_phone"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-mobile-input"
                        label="Mobile"
                        className={classes.textField}
                        type="text"
                        name="mobile"
                        autoComplete="mobile"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-home_phone-input"
                        label="Home Phone"
                        className={classes.textField}
                        type="text"
                        name="home_phone"
                        autoComplete="home_phone"
                        margin="normal"
                        variant="outlined"
                    />
                    <Typography
                        variant="h6" gutterBottom>
                        Address
                    </Typography>
                    <Divider variant="middle" />
                    <TextField
                        id="outlined-billing_street-input"
                        label="Mailing Street"
                        className={classes.textField}
                        type="text"
                        name="shipping_street"
                        autoComplete="shipping_street"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-shipping_city-input"
                        label="Mailing City"
                        className={classes.textField}
                        type="text"
                        name="shipping_city"
                        autoComplete="shipping_city"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-shipping_state-input"
                        label="Mailing State"
                        className={classes.textField}
                        type="text"
                        name="shipping_state"
                        autoComplete="shipping_state"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-shipping_country-input"
                        label="Mailing Country"
                        className={classes.textField}
                        type="text"
                        name="shipping_country"
                        autoComplete="shipping_country"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-shipping_zip_code-input"
                        label="Mailing Zip Code"
                        className={classes.textField}
                        type="text"
                        name="shipping_zip_code"
                        autoComplete="shipping_zip_code"
                        margin="normal"
                        variant="outlined"
                    />

                    <Button  className={classes.buttonStyle}
                             type="submit"
                             variant="contained"
                             color="primary"
                    >
                        Save
                    </Button>

                    {/*<Button*/}
                    {/*    type="submit"*/}
                    {/*    variant="contained"*/}
                    {/*    color="primary"*/}
                    {/*>*/}
                    {/*    Cancel*/}
                    {/*</Button>*/}

                </form>




                {/* {isLoading ? (
          <div className={classes.progressContainer}>
            <CircularProgress
              className={classes.progress}
              size={55}
              thickness={5}
            />
          </div>
        ) : (
          <List dense>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={user.avatar} className={classes.bigAvatar} />
              </ListItemAvatar>
              <ListItemText primary={user.name} secondary={user.email} />
              {/* Auth - Edit Buttons / UnAuth - follow Buttons */}
                {/* {isAuth ? (
                <ListItemSecondaryAction>
                  <Link href="/edit-profile">
                    <a>
                      <IconButton color="primary">
                        <Edit />
                      </IconButton>
                    </a>
                  </Link>
                  <DeleteUser user={user} />
                </ListItemSecondaryAction>
              ) : (
                <FollowUser
                  isFollowing={isFollowing}
                  toggleFollow={this.toggleFollow}
                />
              )}
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary={user.about}
                secondary={`Joined: ${moment(user.createdAt).format("LLLL")}`}
              />
            </ListItem> */}{" "}

                {/* Display User's Posts, Following, Followers */}
                {/* <ProfileTabs
              auth={auth}
              posts={posts}
              user={user}
              isDeletingPost={isDeletingPost}
              handleDeletePost={this.handleDeletePost}
              handleToggleLike={this.handleToggleLike}
              handleAddComment={this.handleAddComment}
              handleDeleteComment={this.handleDeleteComment}
            />
          </List>
        )} */}
            </Paper>
        );
    }
}

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 18,
        margin: "auto",
        [theme.breakpoints.up("sm")]: {
            width: 1300
        }
    },
    title: {
        color: theme.palette.primary.main
    },
    progress: {
        margin: theme.spacing.unit * 2
    },
    progressContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    bigAvatar: {
        width: 60,
        height: 60,
        margin: 10
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    buttonStyle: {
        width: "40%",
        marginLeft: "30%",
        marginRight: "30%",
        marginTop: "20px"
    }
});

Index.getInitialProps = authInitialProps(true);

export default withStyles(styles)(Index);
