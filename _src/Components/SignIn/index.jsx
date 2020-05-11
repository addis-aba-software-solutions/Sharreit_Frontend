import React from "react" 
import {
  TextField,
  Avatar,
  CssBaseline,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Grid,
  Box,
  FormHelperText,
  Typography,
} from "@material-ui/core/";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Logo from "../../Assets/Group.svg";
import useStyles from "./styles";
import { fields } from "./data";
import routes from '../../Config/routes'
import keys from '../../Config/keys'
import signIn from './functions/signIn'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <b>Sharreit PLC</b> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn({ history }) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    email: "",
    password: "",
  })

  const [form, setForm] = React.useState({
    email: fields.email,
    password: fields.password,
  })

  const [loading, setLoading] = React.useState(false)

  const handleClick = async (event) => {
    var complete = true
    event.preventDefault()
    for (var element in state) {
      if (state[element] === "") {
        complete = false
        var update = form[element]
        update.error = !form[element].error
        setForm({ ...form, [element]: update })
      } else if (state[element] !== '' && form[element]['error']) {
        update['error'] = !form[element]['error']
        setForm({ ...form, [element]: update })
      }
    }
    if (complete) {
      setLoading(true)
      const { data } = await signIn(state.email, state.password)
      if (data.token !== "") {
        sessionStorage.setItem(keys['TOKEN'], data.token)
        history.push(routes.root)
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        className={classes.paperContainer}
      >
        <div className={classes.paper}>
          <img src={Logo} className={classes.Logo} alt="" />

          <Avatar className={classes.avatar}>
            <ExitToAppIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <Box className={classes.FormHelperText}>
              <FormHelperText error={form.email.error}>
                {form.email.error ? form.email.errorText : ""}
              </FormHelperText>
            </Box>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />

            <Box className={classes.FormHelperText}>
              <FormHelperText error={form.password.error}>
                {form.password.error ? form.password.errorText : ""}
              </FormHelperText>
            </Box>

            <FormControlLabel
              className={classes.checkbox}
              control={<Checkbox value="remember" color="default" />}
              label="Remember me"
            />
            <Grid xs={12} align="center">
              {
                loading ? <Typography variant="body1" className={classes.loading}>Please wait for a moment</Typography>
                : (
                  <Button
                    type="submit"
                    // fullWidth
                    variant="contained"
                    className={classes.submit}
                    onClick={handleClick}
                  >
                    Sign In
                  </Button>
                )
              }
            </Grid>
            <Grid container>
              <Grid item xs>
                <Link className={classes.primary} href="#" variant="caption">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={classes.primary}
                  href={routes.registration}
                  variant="caption"
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
