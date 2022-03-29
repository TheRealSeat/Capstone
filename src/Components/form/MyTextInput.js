import React from "react";
import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";
function MyTextInput({ label, ...props }) {
  const [fields, meta] = useField(props);
  return (
    <>
      <FormField error={meta.touched && !!meta.error}>
        <label>{label}</label>
        <input {...fields} {...props} />
        {meta.touched && meta.error ? (
          <Label basic color="red">
            {meta.error}
          </Label>
        ) : null}
      </FormField>
    </>
  );
}

export default MyTextInput;
