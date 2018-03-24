import React from "react";
import { Grid } from "material-ui";

import { RegularCard, TableWithAction, ItemGrid } from "components";

const SpendingList = props => {
    const { spendings, onRemove } = props;
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
                        <TableWithAction
                            tableHeaderColor="primary"
                            tableHead={["Name", "Amount", "Type", "Payment", "Date", "Action"]}
                            tableData={listRender}
                            onRemove={onRemove}
                        />
                    }
                />
            </ItemGrid>
        </Grid>
    );
}

export default SpendingList;