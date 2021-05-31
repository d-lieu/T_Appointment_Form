import React, { useState } from "react";
import Form from "@rjsf/core";
import FormData from "../../data/form.json";

const APPOINTMENT_TITLE = "Appointment";
const FIELD_TYPES = {
  TEXT: "text",
  EMAIL: "email",
  PHONE: "phone",
  TEXTAREA: "textarea",
};

export const InputForm = ({ formType }) => {
  const getProperForm = () => {
    let properForm = FormData.find((element) =>
      element.services.find((service) => service == formType)
    );
    let genericForm = FormData.find(
      (element) => element.title == APPOINTMENT_TITLE
    );
    return properForm || genericForm;
  };

  // map object field types
  const fieldTypeMapper = (typeText) => {
    if (
      typeText === FIELD_TYPES.TEXT ||
      FIELD_TYPES.EMAIL ||
      FIELD_TYPES.TEXTAREA
    )
      return "string";
    return "number";
  };

  // map the properties here
  const objToFormMapper = (formObj) => {
    let { fields } = formObj;
    let propertyObj = {};

    // loop through fields array
    for (let i = 0; i <= fields.length - 1; i++) {
      let newObj = {};
      let { name, type, label } = fields[i];
      newObj[name] = {
        type: fieldTypeMapper(type),
        title: label,
      };
      Object.assign(propertyObj, newObj);
    }
    return propertyObj;
  };

  let chosenFormObj = getProperForm();

  // map the schema here
  const schema = {
    title: chosenFormObj.title,
    type: "object",
    properties: objToFormMapper(chosenFormObj),
  };

  // handle submit
  const handleSubmit = (e) => {
    console.log(e.formData)
  };

  return (
    <>
      <Form schema={schema} onSubmit={(e) => handleSubmit(e)} />
    </>
  );
};
