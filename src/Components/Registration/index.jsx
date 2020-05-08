import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  Paper,
  Box,
  Grid,
  Typography,
  Step,
  StepLabel,
  Stepper,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import useStyles from "./styles";
import { fields, socialMedia, personalDetails } from "./data";
import Logo from "../../Assets/Group.svg";
import PersonalInformation from "./components/personalInformation";
import SocialMediaInformation from "./components/socialMedia";
import FinalInformation from "./components/finalStep";
import routes from "../../Config/routes";
import signup from "./functions/signup";
import { statusCodes } from "../../Config/config";
import saveToken from "../../Config/saveToken";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      SharreIt :{new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = [
  "Personal Information",
  "Link your social media",
  "Finishing up",
];

export default function Registration({ history }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
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
    firstName: fields.firstName,
    lastName: fields.lastName,
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

  const [social, setSocial] = React.useState({
    telegram: "",
    facebook: "",
    whatsapp: "",
  });

  const [socialForms, setSocialForms] = React.useState({
    telegram: socialMedia.telegram,
    facebook: socialMedia.facebook,
    whatsapp: socialMedia.whatsapp,
  });

  const [final, setFinal] = React.useState({
    phoneNumber: "",
    birthday: "",
    gender: "",
  });

  const [finalForm, setFinalForm] = React.useState({
    phoneNumber: personalDetails.phoneNumber,
    birthday: personalDetails.birthday,
    gender: personalDetails.gender,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSocial = (event) => {
    const { name, value } = event.target;
    setSocial({ ...social, [name]: value });
  };

  const handleFinal = (event) => {
    const { name, value } = event.target;
    setFinal({ ...final, [name]: value });
  };

  const checkForm = () => {
    var completed = true;
    for (var element in state) {
      if (
        typeof state[element] === "string" &&
        element !== "confirm_password"
      ) {
        var update = form[element];
        if (
          state[element] === "" &&
          form[element]["required"] &&
          !form[element]["error"]
        ) {
          completed = false;
          update["error"] = !form[element]["error"];
          setForm({ ...form, [element]: update });
        } else if (state[element] !== "" && form[element]["error"]) {
          update["error"] = !form[element]["error"];
          setForm({ ...form, [element]: update });
        }
      }
    }

    if (state["password"] !== state["confirm_password"]) {
      completed = false;
      var updated = form["confirm_password"];
      updated["error"] = true;
      setForm({ ...form, ["confirm_password"]: updated });
    }

    for (var element in form) {
      if (form[element]["error"]) {
        return false
      }
    }

    return completed;
  };

  const checkSocial = () => {
    var completed = true;
    for (var element in social) {
      var update = socialForms[element];
      if (social[element] === "" && socialForms[element]["required"]) {
        completed = false;
        update["error"] = true;
        setSocialForms({ ...socialForms, [element]: update });
      } else if (social[element] !== "" && socialForms[element]["error"]) {
        update["error"] = false;
        setSocialForms({ ...socialForms, [element]: update });
      }
    }
    return completed;
  };

  const checkFinal = () => {
    var completed = true;
    for (var element in final) {
      var update = finalForm[element];
      if (final[element] === "" && finalForm[element]["required"]) {
        completed = false;
        update["error"] = true;
        setFinalForm({ ...finalForm, [element]: update });
      } else if (
        final[element] !== "" &&
        finalForm[element]["error"] &&
        element !== "phoneNumber"
      ) {
        update["error"] = false;
        setFinalForm({ ...finalForm, [element]: update });
      }
    }

    if (
      final["phoneNumber"] === "+" ||
      final["phoneNumber"] === "" ||
      final["phoneNumber"] === "+1"
    ) {
      update = finalForm["phoneNumber"];
      update["error"] = true;
      setFinalForm({ ...finalForm, ["phoneNumber"]: update });
    } else {
      update = finalForm["phoneNumber"];
      update["error"] = false;
      setFinalForm({ ...finalForm, ["phoneNumber"]: update });
    }

    return completed;
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PersonalInformation form={form} handleChange={handleChange} />;
      case 1:
        return (
          <SocialMediaInformation
            form={socialForms}
            handleChange={handleSocial}
          />
        );
      case 2:
        return <FinalInformation form={finalForm} handleChange={handleFinal} />;
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = async () => {
    var check = false;
    if (activeStep === 0) {
      check = checkForm();
      if (!check) return null;
    } else if (activeStep === 1) {
      check = checkSocial();
      if (!check) return null;
    } else if (activeStep == 2) {
      check = checkFinal();
      if (!check) return null;
    }

    if (activeStep === 2) {
      setLoading(true);
      const { status, data } = await signup(state, social, final);
      if (status === statusCodes["SUCCESS_CREATED"]) {
        saveToken(data.token);
        history.push(routes.root);
      }
      return null;
    }

    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
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
          <Box className={classes.paper}>
            <img src={Logo} className={classes.Logo} alt="" />
            <Avatar className={classes.avatar}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              className={classes.stepper}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  {loading ? (
                    <Typography variant="body1" className={classes.loading}>
                      Please wait for a moment
                    </Typography>
                  ) : (
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Sign up" : "Next"}
                      </Button>
                    </div>
                  )}
                </React.Fragment>
              )}
            </React.Fragment>
          </Box>
          <Copyright />
        </Grid>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
      </Grid>
    </>
  );
}
