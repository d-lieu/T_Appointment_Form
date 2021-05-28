import React, { useState } from "react";
import Form from "@rjsf/core";
import FormData from "../../data/form.json";

export const InputForm = ({ formType }) => {
  const [form, setForm] = useState({});

  console.log(formType);

  const formHandler = () => {
    FormData.map((entry, index) => {
      if (entry.title == formType) {
        return entry;
      }
    });
  };

  let chosenFormObj = formHandler();
  console.log(chosenFormObj);

  // map the schema here
  const schema = {
    title: "Test form",
    type: "string",
  };

  return (
    <>
      <Form schema={schema} />
    </>
  );
};
