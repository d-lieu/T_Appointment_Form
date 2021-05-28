import React, { useState } from "react";
import ServiceData from "../../data/services.json";
import { Dropdown } from "../Dropdown/Dropdown";
import { InputForm } from "../InputForm/InputForm";

export const CliniaForm = () => {
  const [chosenService, setChosenService] = useState("");
  const callbackFunction = (childData) => {
    setChosenService(childData);
  };

  const checkFormType = (serviceText) => {
    switch (serviceText) {
      case "Dental Imaging":
        return "Dental radiology appointment";
      case "Ultrasound":
      case "Gallium Scintigraphy":
      case "Radiography (X-Ray)":
      case "Computed Tomography (CT-Scan)":
      case "Virtual Colonoscopy":
        return "Radiology appointment";
      default:
        return "Appointment";
    }
  };

  return (
    <>
      <Dropdown serviceTypes={ServiceData} parentCallback={callbackFunction} />
      {/* {checkFormType(chosenService)} */}
      <InputForm formType={checkFormType(chosenService)} />
    </>
  );
};
