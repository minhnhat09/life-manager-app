import React from "react";
import { Grid } from "material-ui";

import { RegularCard, Table, ItemGrid } from "components";

const SpendingList = props => {
    const { spendings } = props;
    const { listSpendings } = spendings;
    const listRender = []
    listSpendings.map(s => listRender.push(Object.values(s)));
    return (
        <Grid container>
            <ItemGrid xs={12} sm={12} md={12}>
                <RegularCard
                    cardTitle="Spending table"
                    cardSubtitle="Here is a subtitle for this table"
                    content={
                        <Table
                            tableHeaderColor="primary"
                            tableHead={["Name", "Amount", "Type", "Payment", "Date"]}
                            tableData={listRender}
                        />
                    }
                />
            </ItemGrid>
        </Grid>
    );
}

export default SpendingList;