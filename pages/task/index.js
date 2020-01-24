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


const currencies = [
    {
        value: 'Cold',
        label: 'Cold',
    },
    {
        value: 'Warm',
        label: 'Warm',
    },
    {
        value: 'Hot',
        label: 'Hot',
    },
    {
        value: 'Won',
        label: 'Won',
    },,
    {
        value: 'Lost',
        label: 'Lost',
    },
];
const dealOwner = [
    {
        value: 'kdb',
        label: 'kiranb.mobio',
    }
];

class Index extends React.Component {
    state = {
        user: null,
        // posts: [],
        isAuth: false,
        isLoading: true
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

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };


    render() {
        const { classes, auth } = this.props;
        return (
            <Paper className={classes.root} elevation={4}>
                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    className={classes.title}
                    gutterBottom
                >
                    Add Task
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
                        id="outlined-associate_with-input"
                        label="Associate with"
                        className={classes.textField}
                        type="text"
                        name="associate_with"
                        autoComplete="associate_with"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="filled-select-status-native"
                        select
                        label="Status"
                        className={classes.textField}
                        value={this.state.currency}
                        onChange={this.handleChange('status')}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        margin="normal"
                        variant="filled"
                    >
                        {currencies.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                    <TextField
                        className={classes.textField}
                        type="date"
                        name="description"
                        autoComplete="description"
                        margin="normal"
                        variant="outlined"
                        helperText="Expected Closing Date"
                    />
                    <TextField
                        id="filled-select-status-native"
                        select
                        label="Deal Owner"
                        className={classes.textField}
                        value={this.state.dealOwner}
                        onChange={this.handleChange('status')}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        margin="normal"
                        variant="filled"
                    >
                        {dealOwner.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-deal_value-input"
                        label="Deal Value"
                        className={classes.textField}
                        type="text"
                        name="deal_value"
                        autoComplete="deal_value"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-description-input"
                        label="Description"
                        multiline
                        rows="4"
                        className={classes.textField}
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
    },
    menu: {
        width: 200,
    },
});

Index.getInitialProps = authInitialProps(true);

export default withStyles(styles)(Index);
