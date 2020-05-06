import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import useStyles from "../styles";
import { fields, options } from "../data";

import Logo from "../../../Assets/Group.svg";

export default function SignupSide() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    email: "",
    password: "",
    confirm_password: "",
    street_address_1: "",
    street_address_2: "",
    city: "",
    province: "",
    country: "",
    zip_code: "",
  });

  const [form, setForm] = React.useState({
    email: fields.email,
    password: fields.password,
    confirm_password: fields.confirm_password,
    street_address_1: fields.street_address_1,
    street_address_2: fields.street_address_2,
    city: fields.city,
    province: fields.province,
    country: fields.country,
    zip_code: fields.zip_code,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const checkForm = () => {
    for (var element in state) {
      if (typeof state[element] === "string") {
        var update = form[element];
        if (
          state[element] === "" &&
          form[element]["required"] &&
          !form[element]["error"]
        ) {
          update["error"] = !form[element]["error"];
          setForm({ ...form, [element]: update });
        } else if (state[element] !== "" && form[element]["error"]) {
          update["error"] = !form[element]["error"];
          setForm({ ...form, [element]: update });
        }
      }
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    const result = checkForm();
    if (result) {
      // API goes here
    }
  };

  return (
    <Grid container component="main">
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
          onChange={handleChange}
          error={form.email.error}
        />
        <FormHelperText error={form.email.error}>
          {form.email.error ? form.email.errorText : ""}
        </FormHelperText>
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
          error={form.password.error}
        />
        <FormHelperText error={form.password.error}>
          {form.password.error ? form.password.errorText : ""}
        </FormHelperText>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="confirm_password"
          label="Repeat Password"
          type="password"
          id="confirm_password"
          onChange={handleChange}
          error={form.confirm_password.error}
        />
        <FormHelperText error={form.confirm_password.error}>
          {form.confirm_password.error ? form.confirm_password.errorText : ""}
        </FormHelperText>
        <Typography className={classes.addressText}>Address</Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="street_address_1"
          label="Street Address"
          id="street_address_1"
          onChange={handleChange}
          error={form.street_address_1.error}
        />
        <FormHelperText error={form.street_address_1.error}>
          {form.street_address_1.error ? form.street_address_1.errorText : ""}
        </FormHelperText>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="street_address_2"
          label="Street Address 2"
          id="street_address_2"
          onChange={handleChange}
          error={form.street_address_2.error}
        />
        <Grid container xs={12} display="flex" justify="space-between">
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              name="city"
              label="City"
              id="city"
              fullWidth
              onChange={handleChange}
              error={form.city.error}
            />
            <FormHelperText error={form.city.error}>
              {form.city.error ? form.city.errorText : ""}
            </FormHelperText>
          </Grid>
          <Grid item xs={5}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              name="province"
              label="State / Province"
              id="state"
              fullWidth
              onChange={handleChange}
              error={form.province.error}
            />
            <FormHelperText error={form.province.error}>
              {form.province.error ? form.province.errorText : ""}
            </FormHelperText>
          </Grid>
        </Grid>
        <Grid container xs={12} display="flex" justify="space-between">
          <Grid item xs>
            <FormControl variant="outlined" className={classes.singularField}>
              <InputLabel htmlFor="country">Country</InputLabel>
              <Select
                required
                fullWidth
                label="Country"
                inputProps={{
                  name: "country",
                  id: "country",
                }}
                className={classes.controlFields}
                name="country"
                onChange={handleChange}
                error={form.country.error}
              >
                <option aria-label="None" value="" />
                {options.country.map((place) => (
                  <option key={place} value={place}>
                    {place}
                  </option>
                ))}
              </Select>
              <FormHelperText error={form.country.error}>
                {form.country.error ? form.country.errorText : ""}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={7}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              name="zip_code"
              label="Postal / Zip Cide"
              id="zip_code"
              fullWidth
              onChange={handleChange}
              error={form.zip_code.error}
            />
            <FormHelperText error={form.zip_code.error}>
              {form.zip_code.error ? form.zip_code.errorText : ""}
            </FormHelperText>
          </Grid>
        </Grid>
        <Grid xs={12} align="center">
          <Button
            type="submit"
            // fullWidth
            variant="contained"
            className={classes.submit}
            onClick={handleClick}
            // href="/CategoryPage"
            onClick={handleClick}
          >
            Register
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}
