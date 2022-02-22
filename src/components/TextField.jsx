import React from "react";
import "../App.css";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div className="formDiv">
      <input
        className="formInput"
        placeholder=" "
        {...field}
        {...props}
        autoComplete="off"
      />
      <label className="formLabel" htmlFor={field.name}>
        {label}
      </label>
      <ErrorMessage component="div" className="error" name={field.name} />
    </div>
  );
};
