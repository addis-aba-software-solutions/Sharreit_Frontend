import React from "react";
import {
  TextField,
  Radio,
  FormLabel,
  Grid,
  FormControlLabel,
  RadioGroup,
  FormControl,
  FormHelperText,
  Typography
} from "@material-ui/core";
import useStyles from "../styles";
import MuiPhoneNumber from "material-ui-phone-number";

export default function FinalStep({ form, handleChange }) {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.finalStepsContainer}>
      <form className={classes.finalStepsForm} noValidate>

        <Typography variant='caption' style={{color: '#7d7d7d'}}>
          Phone Number
        </Typography>

        <FormControl className={classes.finalStepsBirthDay}>
          {/* <MuiPhoneNumber defaultCountry={"us"} onChange={value => handleChange({ target: { name: 'phoneNumber', value } })} /> */}
          <MuiPhoneNumber
            defaultCountry={"us"}
            onChange={(value) =>
              handleChange({ target: { name: "phoneNumber", value } })
            }
            name="phoneNumber"
          />
          <FormHelperText error={form.phoneNumber.error}>
            {form.phoneNumber.error ? form.phoneNumber.errorText : ""}
          </FormHelperText>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            <Typography variant='caption'>
              Gender
            </Typography>
          </FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender"
            onChange={handleChange}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
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
