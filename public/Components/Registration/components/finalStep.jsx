import React from "react"
import {
  TextField,
  Radio,
  FormLabel,
  Grid,
  FormControlLabel,
  RadioGroup,
  FormControl,
  FormHelperText,
} from "@material-ui/core"
import useStyles from "../styles"
import MuiPhoneNumber from 'material-ui-phone-number'

export default function FinalStep({ form, handleChange }) {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.finalStepsContainer}>
      <form className={classes.finalStepsForm} noValidate>
        <FormControl className={classes.finalStepsBirthDay}>
          {/* <TextField
            id="date"
            label="Phone Number"
            name="phoneNumber"
            InputLabelProps={{
              shrink: true,
            }}
            error={form.phoneNumber.error}
            onChange={handleChange}
          /> */}
          <MuiPhoneNumber defaultCountry={"us"} onChange={handleChange} name="phoneNumber" />
          <FormHelperText error={form.phoneNumber.error}>
            {form.phoneNumber.error ? form.phoneNumber.errorText : ""}
          </FormHelperText>
        </FormControl>
        <FormControl component="fieldset" >
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" onChange={handleChange} style={{ display: "flex", flexDirection: "row" }}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            <FormHelperText error={form.gender.error}>
            {form.gender.error ? form.gender.errorText : ""}
            </FormHelperText>
        </FormControl>
        <FormControl className={classes.finalStepsBirthDay}>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            name="birthday"
            InputLabelProps={{
              shrink: true,
            }}
            error={form.birthday.error}
            onChange={handleChange}
          />
        </FormControl>
        <FormHelperText error={form.birthday.error}>
          {form.birthday.error ? form.birthday.errorText : ""}
        </FormHelperText>
      </form>
    </Grid>
  );
}