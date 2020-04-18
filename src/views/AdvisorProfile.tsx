import React, { useContext } from "react";
import Context from "../store/context";

export default function AdviserProfile() {
  const { state }: any = useContext(Context);
  const { selectedAdvisor }  = state;

  console.log("Advisor object: ", selectedAdvisor);
  console.log("Properties: ", selectedAdvisor.properties);

  // Assign the properties to a const
  const props = selectedAdvisor.properties;

  return (
    <>
      <p>Here is an example: </p>
      <p>Adviser Name: {props.name} </p>
    </>
  );
}
