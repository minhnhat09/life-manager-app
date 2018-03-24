import React from "react";
import { Grid } from "material-ui";

import { RegularCard, Table, ItemGrid } from "components";

const SpendingHome = ({ ...props }) => {
    return (
        <Grid container>
            <ItemGrid xs={12} sm={12} md={12}>
                <RegularCard
                    cardTitle="Spending table"
                    cardSubtitle="Here is a subtitle for this table"
                    content={
                        <Table
                            tableHeaderColor="primary"
                            tableHead={["Name", "Amount", "Type", "Date", "Action"]}
                            tableData={[
                                ["Dakota Rice", "10", "Đi chợ lindle", "$36,738"],
                                ["Dakota Rice", "10", "Đi chợ lindle", "$36,738"],
                                ["Dakota Rice", "10", "Đi chợ lindle", "$36,738"],
                                ["Dakota Rice", "10", "Đi chợ lindle", "$36,738"],
                                
                            ]}
                        />
                    }
                />
            </ItemGrid>
        </Grid>
    );
}

export default SpendingHome;
