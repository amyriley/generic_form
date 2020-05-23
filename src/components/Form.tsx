import React, { Fragment } from "react";
import GenericInput from "./GenericInput";
import { useForm } from "react-final-form-hooks";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Links from "./Links";
import Container from "./Container";

const Form = () => {
  const testOptions = ["Option 1", "Option 2"];

  const formFields = [
    {
      type: "text",
      label: "First Name",
      name: "firstName",
    },
    {
      type: "text",
      label: "Last Name",
      name: "lastName",
    },
    {
      type: "text",
      label: "Email",
      name: "email",
    },
    {
      type: "dropdown",
      label: "Demo",
      name: "demo",
      options: testOptions,
    },
  ];

  const onSubmit = () => {
    console.log("submit values", values);
  };

  const { form, handleSubmit, values, pristine, submitting } = useForm({
    onSubmit,
  });

  return (
    <Fragment>
      <Container />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {formFields.map((item) => (
            <Grid item xs={12} key={item.name}>
              <Grid container justify="center" spacing={2}>
                <GenericInput
                  form={form}
                  type={item.type}
                  label={item.label}
                  name={item.name}
                  options={item.options}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Button
              variant="contained"
              type="submit"
              style={{ margin: "20px 0 0 0" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default Form;
