import React, { useState } from "react";
import ServiceData from "../../data/services.json";
import { Dropdown } from "../Dropdown/Dropdown";
import { InputForm } from "../InputForm/InputForm";

export const CliniaForm = () => {
  const [chosenService, setChosenService] = useState(undefined);
  const callbackFunction = (childData) => {
    setChosenService(childData);
  };

  return (
    <>
      <Dropdown serviceTypes={ServiceData} parentCallback={callbackFunction} />
      {chosenService && <InputForm formType={chosenService} />}
    </>
  );
};
