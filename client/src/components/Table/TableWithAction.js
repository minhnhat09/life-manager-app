import React from "react";
import {
    withStyles,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    IconButton,
    Tooltip
} from "material-ui";
import { Edit, Close } from "material-ui-icons";
import PropTypes from "prop-types";

import tableStyle from "variables/styles/tableStyle";

const TableWithAction = ({ ...props }) => {
    const { classes, tableHead, tableData, tableHeaderColor, onRemove } = props;
    return (
        <div className={classes.tableResponsive}>
            <Table className={classes.table}>
                {tableHead !== undefined ? (
                    <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
                        <TableRow>
                            {tableHead.map((prop, key) => {
                                return (
                                    <TableCell
                                        className={classes.tableCell + " " + classes.tableHeadCell}
                                        key={key}
                                    >
                                        {prop}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                ) : null}
                <TableBody>
                    {tableData.map((prop, key) => {
                        return (
                            <TableRow key={key}>
                                {prop.map((prop, key) => {
                                    return (
                                        <TableCell className={classes.tableCell} key={key}>
                                            {prop}
                                        </TableCell>
                                    );
                                })}
                                <TableCell className={classes.tableActions}>
                                    <Tooltip
                                        id="tooltip-top"
                                        title="Edit Task"
                                        placement="top"
                                        classes={{ tooltip: classes.tooltip }}
                                    >
                                        <IconButton
                                            aria-label="Edit"
                                            className={classes.tableActionButton}
                                        >
                                            <Edit
                                                className={
                                                    classes.tableActionButtonIcon + " " + classes.edit
                                                }
                                            />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip
                                        id="tooltip-top-start"
                                        title="Remove"
                                        placement="top"
                                        classes={{ tooltip: classes.tooltip }}
                                        onClick={() => onRemove(key)}
                                    >
                                        <IconButton
                                            aria-label="Close"
                                            className={classes.tableActionButton}
                                        >
                                            <Close
                                                className={
                                                    classes.tableActionButtonIcon + " " + classes.close
                                                }
                                            />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}

TableWithAction.defaultProps = {
    tableHeaderColor: "gray"
};

TableWithAction.propTypes = {
    classes: PropTypes.object.isRequired,
    tableHeaderColor: PropTypes.oneOf([
        "warning",
        "primary",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    tableHead: PropTypes.arrayOf(PropTypes.string)
    // tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default withStyles(tableStyle)(TableWithAction);
