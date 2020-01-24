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
import CloudUpload from "@material-ui/icons/CloudUpload";
import FaceTwoTone from "@material-ui/icons/FaceTwoTone";
// import ProfileTabs from "../components/profile/ProfileTabs";
// import DeleteUser from "../components/profile/DeleteUser";
// import FollowUser from "../components/profile/FollowUser";
import {authInitialProps, signupUser} from "../../lib/auth";
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
      isAuth: false,
      name: "",
      website_url: "",
      description: "",
      phone_no: "",
      tags: "",
      fax: "",
      avatar: "",
      avatarPreview: "",
      error: "",
      updatedUser: null,
      openError: false,
      openSuccess: false,
      isSaving: false,
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

    handleChange = event => {

        let inputValue;

        if (event.target.name === "avatar") {
            inputValue = event.target.files[0];
            this.setState({avatarPreview: this.createPreviewImage(inputValue)})
        } else {
            inputValue = event.target.value;
        }
        // this.userData.set(event.target.name, inputValue);
        this.setState({[event.target.name]: inputValue});

    }


    handleSubmit = event => {
        event.preventDefault();
        this.setState({isSaving: true})

        createCompany(this.state._id, this.userData)
            .then(createCompany => {
                this.setState({createCompany, openSuccess: true});
                setTimeout(() => Router.push(`/company`), 6000)
            })
            .catch(this.showError);

    }

    createPreviewImage = file => URL.createObjectURL(file);

    showError = err => {

        const error = err.response && err.response.data || err.message;
        this.setState({error, openError: true, isSaving: false});


    }

  render() {
    const { classes, auth } = this.props;
    const { avatar,avatarPreview} = this.state;
    return (
      <Paper className={classes.root} elevation={4}>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          className={classes.title}
          gutterBottom
        >
            Add Company
        </Typography>

          <form onSubmit={this.handleSubmit} className={classes.container} autoComplete="off">

        <TextField
            id="outlined-email-input"
            label="Name"
            className={classes.textField}
            type="text"
            name="name"
            autoComplete="name"
            margin="normal"
            variant="outlined"
        />
        <TextField
            id="outlined-website-input"
            label="Website"
            className={classes.textField}
            type="text"
            name="website"
            autoComplete="website"
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
            id="outlined-phone-input"
            label="Phone"
            className={classes.textField}
            type="text"
            name="phone"
            autoComplete="phone"
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
              <Avatar src={avatarPreview || avatar} className={classes.bigAvatar}/>
              <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  accept="image/*"
                  onChange={this.handleChange}
                  className={classes.input}
              />
              <label htmlFor="avatar" className={classes.uploadButton}>
                  <Button variant="contained" color="secondary" component="span">
                      Upload Image <CloudUpload/>
                  </Button>
              </label>
              <span className={classes.filename}>{avatar && avatar.name}</span>

          <Typography
              variant="h4"
              component="h1" gutterBottom >
              Address
          </Typography>
          <Divider variant="middle" />

          <Typography
              variant="h6" gutterBottom>
              Billing Address
          </Typography>
        <TextField
            id="outlined-billing_street-input"
            label="Billing Street"
            className={classes.textField}
            type="text"
            name="billing_street"
            autoComplete="billing_street"
            margin="normal"
            variant="outlined"
        />
        <TextField
            id="outlined-billing_city-input"
            label="Billing City"
            className={classes.textField}
            type="text"
            name="billing_city"
            autoComplete="billing_city"
            margin="normal"
            variant="outlined"
        />
        <TextField
            id="outlined-billing_state-input"
            label="Billing State"
            className={classes.textField}
            type="text"
            name="billing_state"
            autoComplete="billing_state"
            margin="normal"
            variant="outlined"
        />
        <TextField
            id="outlined-billing_country-input"
            label="Billing Country"
            className={classes.textField}
            type="text"
            name="billing_country"
            autoComplete="billing_country"
            margin="normal"
            variant="outlined"
        />
        <TextField
            id="outlined-billing_zip_code-input"
            label="Billing Zip Code"
            className={classes.textField}
            type="text"
            name="billing_zip_code"
            autoComplete="billing_zip_code"
            margin="normal"
            variant="outlined"
        />
          <Typography
              variant="h6" gutterBottom>
              Shipping Address
          </Typography>
        <TextField
            id="outlined-billing_street-input"
            label="Shipping Street"
            className={classes.textField}
            type="text"
            name="shipping_street"
            autoComplete="shipping_street"
            margin="normal"
            variant="outlined"
        />
        <TextField
            id="outlined-shipping_city-input"
            label="Shipping City"
            className={classes.textField}
            type="text"
            name="shipping_city"
            autoComplete="shipping_city"
            margin="normal"
            variant="outlined"
        />
        <TextField
            id="outlined-shipping_state-input"
            label="Shipping State"
            className={classes.textField}
            type="text"
            name="shipping_state"
            autoComplete="shipping_state"
            margin="normal"
            variant="outlined"
        />
        <TextField
            id="outlined-shipping_country-input"
            label="Shipping Country"
            className={classes.textField}
            type="text"
            name="shipping_country"
            autoComplete="shipping_country"
            margin="normal"
            variant="outlined"
        />
        <TextField
            id="outlined-shipping_zip_code-input"
            label="Shipping Zip Code"
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
    uploadButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0.25em"
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
      marginLeft: "47%",
      marginRight: "47%",
      width: 60,
      height: 60,
      margin: 10
  },
    filename: {
      width: "44%",
      marginLeft: "43%",
      marginRight: "20%",
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
    input: {
        display: "none"
    }
});

Index.getInitialProps = authInitialProps(true);

export default withStyles(styles)(Index);
