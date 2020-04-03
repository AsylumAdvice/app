import React from "react";
import * as adviceGeo from "../data/adviceGeo.json";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18
    }
  }
});

export default function AdviceSearch() {
  const classes = useStyles();

  return (
    <>
      <p>Hello</p>
    </>
  );
}

/* <ul>
        {adviceGeo.features.map((item: any ) => (
            <li
                // key={shortid.generate()}
            >
                {item.properties.location}
            </li>

        ))}
    </ul> */

// <Autocomplete
//   id="advice-select"
//   style={{ width: 300 }}
//   options={adviceGeo}
//   classes={{
//     option: classes.option
//   }}
//   autoHighlight
//   getOptionLabel={option => option.label}
//   renderOption={option => (
//     <React.Fragment>
//       <span>{countryToFlag(option.code)}</span>
//       {option.label} ({option.code}) +{option.phone}
//     </React.Fragment>
//   )}
//   renderInput={params => (
//     <TextField
//       {...params}
//       // label="Choose a country"
//       variant="outlined"
//       inputProps={{
//         ...params.inputProps,
//         autoComplete: "new-password" // disable autocomplete and autofill
//       }}
//     />
//   )}
// />
