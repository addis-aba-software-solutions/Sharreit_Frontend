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
import { options } from "../data";

import Logo from "../../../Assets/Group.svg";

export default function SocialMedia({ form, handleChange }) {
  const classes = useStyles();
  return (
    <Grid container component="main">
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="telegram"
          label="Telegram"
          name="telegram"
          autoComplete="telegram"
          onChange={handleChange}
          error={form.telegram.error}
        />
        <FormHelperText error={form.telegram.error}>
          {form.telegram.error ? form.telegram.errorText : ""}
        </FormHelperText>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="facebook"
          label="Facebook"
          id="facebook"
          autoComplete="facebook"
          onChange={handleChange}
          error={form.facebook.error}
        />
        <FormHelperText error={form.facebook.error}>
          {form.facebook.error ? form.facebook.errorText : ""}
        </FormHelperText>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="whatsapp"
          label="Whatspp"
          id="whatsapp"
          onChange={handleChange}
          error={form.whatsapp.error}
        />
        <FormHelperText error={form.whatsapp.error}>
          {form.whatsapp.error ? form.whatsapp.errorText : ""}
        </FormHelperText>
      </form>
    </Grid>
  );
}