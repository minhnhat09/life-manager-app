import React from "react";
import { withStyles, FormControl, InputLabel, Input } from "material-ui";
import { Clear, Check } from "material-ui-icons";
import PropTypes from "prop-types";
import cx from "classnames";
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import customInputStyle from "variables/styles/customInputStyle";

const CustomInputForm = ({ ...props }) => {
  const {
    classes,
    formControlProps,
    labelText,
    id,
    labelProps,
    input,
    success,
    meta: { error, touched },
    type
  } = props;
  console.log('custom input', props);
  const errorCombined = error && touched;
  const labelClasses = cx({
    [" " + classes.labelRootError]: errorCombined,
    [" " + classes.labelRootSuccess]: success && !errorCombined
  });
  const inkbarClasses = cx({
    [classes.inkbarError]: errorCombined,
    [classes.inkbarSuccess]: success && !errorCombined,
    [classes.inkbar]: !success && !errorCombined
  });
  const marginTop = cx({
    [classes.marginTop]: labelText === undefined
  });
  return (
    <FormControl
      {...formControlProps}
      className={formControlProps.className + " " + classes.formControl}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      {
        type === "select" ?
          (<Select
            classes={{
              root: marginTop,
              disabled: classes.disabled
            }}
            id={id}
            {...input}
            type={type}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>) :
          (<Input
            classes={{
              root: marginTop,
              disabled: classes.disabled,
              underline: classes.underline,
              inkbar: inkbarClasses
            }}
            id={id}
            {...input}
            type={type}
          />)
      }
      {errorCombined ? (
        <Clear className={classes.feedback + " " + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + " " + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
  );
}

CustomInputForm.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  input: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool
};

export default withStyles(customInputStyle)(CustomInputForm);
