import React from "react";
// import _ from 'lodash';
import { Grid, CardActions } from "material-ui";
import { reduxForm, Field } from 'redux-form';
// COMPONENTS
import { RegularCard, Button, CustomInputForm, ItemGrid } from "components";
import SpendingFormFields from './SpendingFormFields';

const SpendingForm = props => {
  const { returnToList, handleSubmit, fields } = props;
  const onSpendingSubmit = input => {
    console.log('input', input);
  }
  const renderFields = () => {
    console.log(SpendingFormFields);
    return SpendingFormFields.map(({ name, type, label, options }) => {
      return (
        <Grid container key={name}>
          <ItemGrid xs={12} sm={12} md={12}>
            <Field
              component={CustomInputForm}
              type={type}
              options={options}
              name={name}
              labelText={label}
              formControlProps={{
                fullWidth: true
              }}
            />
          </ItemGrid>
        </Grid>
      );
    });
  };
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            cardTitle="Add spending"
            cardSubtitle="Add spending"
            content={
              <div>
                <form onSubmit={handleSubmit(onSpendingSubmit)}>
                  {renderFields()}
                  < CardActions style={{
                    padding: "14px",
                    display: "block",
                    height: "auto"
                  }}>
                    <Button color="success" type="submit">Confirm</Button>
                    <Button color="danger" onClick={returnToList}>Cancel</Button>
                  </CardActions>

                </form>
              </div>
            }
          />
        </ItemGrid>
      </Grid>
    </div>
  );
};

function validate(values) {
  const errors = {};

  SpendingFormFields.map(({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: 'spendingForm',
  initialValues: {
    purchase: 'John Doe',
    price: '11',
    payment: '11',
    datePurchase: Date.now()
  }
})(SpendingForm);