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
    // Prefs
    prefCity: "",
    prefLang: "English",
    selectedAdisor: "",
    // Viewport
    latitude: 52.520008,
    longitude: 13.404954,
    height: "40vh",
    width: "99vw",
    zoom: 9,
    userLon: 52.520008,
    userLat: 52.520008,
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
