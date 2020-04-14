import { useState } from "react";

import IGlobalState from "../interfaces/IGlobalState";

const useGlobalState = () => {
  const [state, setState] = useState<IGlobalState>({
    // Questionnaire
    asylumProgress: "About to start",
    visa: "no",
    fingerprints: "no",
    passport: "no",
    nationality: "",
    under18: "no",
    familyInGermany: "no",
    familyElsewhere: "no",
    adviceLocation: "",
    // Map selections
    prefCity: "",
    prefLang: "English",
    selectedAdisor: "",
  });

  const actions = (action: { type: any; payload: any }) => {
    console.log("In actions", state.asylumProgress);
    const { type, payload } = action;
    switch (type) {
      case "setState":
        return setState(payload);
      default:
        return state;
    }
  };

  return { state, actions };
};

export default useGlobalState;
