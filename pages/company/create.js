import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

import TextField from '@material-ui/core/TextField';
import CloudUpload from "@material-ui/icons/CloudUpload";
import {authInitialProps} from "../../lib/auth";
import {createCompany} from "../../lib/api";
import Router from "next/router";
import Snackbar from "@material-ui/core/Snackbar";

class Index extends React.Component {
    state = {
        user: null,
        isAuth: false,
        companies: [],
        name: "",
        website_url: "",
        description: "",
        phone_no: "",
        tags: [],
        billing_street: "",
        billing_city: "",
        billing_state: "",
        billing_country: "",
        billing_zipCode: "",
        shipping_street: "",
        shipping_city: "",
        shipping_state: "",
        shipping_country: "",
        shipping_zipCode: "",
        company_image: "",
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

    handleClose = () =>
        this.setState({
            openError: false
        });


    handleChange = async (event) => {
        // console.log("event.target.name", event.target.name)
        let inputValue;
        if (event.target.name === "company_image") {
            inputValue = event.target.files[0];
            this.setState({avatarPreview: this.createPreviewImage(inputValue)})
        } else {
            inputValue = event.target.value;
        }
        await this.setState({[event.target.name]: inputValue});
        console.log("constructObj", this.state)
    }


    handleSubmit = event => {
        const {name, website_url, company_image, description, phone_no, tags, billing_street, billing_city, billing_state, billing_country, billing_zipCode, shipping_street, shipping_city, shipping_state, shipping_country, shipping_zipCode} = this.state;
        event.preventDefault();
        const user = {
            name, website_url, company_image, description, phone_no, tags ,
            address: {
                billing_address: {
                    billing_street,
                    billing_city,
                    billing_state,
                    billing_country,
                    billing_zipCode
                },
                shipping_address: {
                    shipping_street,
                    shipping_city,
                    shipping_state,
                    shipping_country,
                    shipping_zipCode
                }
            }

        };
        this.setState({isLoading: true, error: ''});
        const {auth} = this.props;

        createCompany(auth.user._id, user).then(createCompany => {
            this.setState({
                createCompany,
                error: "",
                openSuccess: true,
                isLoading: false
            })
            setTimeout(() => Router.push(`/company`), 6000)
        }).catch(this.showError);

    }


    createPreviewImage = file => URL.createObjectURL(file);

    showError = err => {
        console.log("errr", err.response);
        const error =
            (err.response && err.response.data && err.response.data.message) ||
            err.message;
        this.setState({error, openError: true, isLoading: false});
    };

    render() {
        const {classes} = this.props;
        const {company_image, avatarPreview, error, openError} = this.state;
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

                <form onSubmit={this.handleSubmit} className={classes.container}>

                    <TextField
                        id="outlined-email-input"
                        label="Name"
                        className={classes.textField}
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        autoComplete="name"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-website-input"
                        label="Website"
                        className={classes.textField}
                        type="text"
                        name="website_url"
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                        autoComplete="description"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-phone-input"
                        label="Phone"
                        className={classes.textField}
                        type="text"
                        name="phone_no"
                        onChange={this.handleChange}
                        autoComplete="phone"
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-tags-input"
                        label="Tags"
                        className={classes.textField}
                        type="text"
                        name="tags"
                        onChange={this.handleChange}
                        autoComplete="tags"
                        margin="normal"
                        variant="outlined"
                    />
                    <Avatar src={avatarPreview || company_image} className={classes.bigAvatar}/>
                    <input
                        type="file"
                        name="company_image"
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
                    <span className={classes.filename}>{company_image && company_image.name}</span>

                    <Typography
                        variant="h4"
                        component="h1" gutterBottom>
                        Address
                    </Typography>
                    <Divider variant="middle"/>

                    <Typography
                        variant="h6" gutterBottom>
                        Billing Address
                    </Typography>
                    <TextField
                        id="outlined-billing_street-input"
                        label="Billing Street"
                        className={classes.textField}
                        type="text"
                        name="address"
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                        autoComplete="billing_country"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-billing_zip_code-input"
                        label="Billing Zip Code"
                        className={classes.textField}
                        type="text"
                        name="billing_zipCode"
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                        autoComplete="shipping_country"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-shipping_zip_code-input"
                        label="Shipping Zip Code"
                        className={classes.textField}
                        type="text"
                        name="shipping_zipCode"
                        onChange={this.handleChange}
                        autoComplete="shipping_zip_code"
                        margin="normal"
                        variant="outlined"
                    />

                    <Button className={classes.buttonStyle}
                            type="submit"
                            variant="contained"
                            color="primary"
                    >
                        Save
                    </Button>

                </form>


                {error && (
                    <Snackbar
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right"
                        }}
                        open={openError}
                        onClose={this.handleClose}
                        autoHideDuration={6000}
                        message={<span className={classes.snack}> {error} </span>}
                    />
                )}


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
