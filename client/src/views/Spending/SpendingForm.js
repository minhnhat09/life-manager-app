import React from "react";
import { Grid } from "material-ui";

import { RegularCard, Button, CustomInput, ItemGrid } from "components";

const SpendingForm = props => {
  const { returnToList } = props;
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            cardTitle="Add spending"
            cardSubtitle="Add spending"
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      id="name"
                      labelText="Name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      id="amount"
                      labelText="Amount"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      id="type"
                      labelText="Type"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      id="Payment"
                      labelText="payment"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={12}>
                    <CustomInput
                      id="date"
                      labelText="Date"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </ItemGrid>
                </Grid>
              </div>
            }
            footer={
              <div>
                <Button color="success">Confirm</Button>
                <Button color="danger" onClick={returnToList}>
                  Cancel
                </Button>
              </div>
            }
          />
        </ItemGrid>
      </Grid>
    </div>
  );
};

export default SpendingForm;
