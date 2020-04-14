import React, { useContext } from "react";
import Context from "../store/context";
import adviceGeo from "../data/adviceGeo.json";
import { getValues } from "../components/getObjects";

// Material-ui
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";



const getLangList = () => {
  const obj = getValues(adviceGeo, "language");
  const arr = Object.keys(obj).map((key) => obj[key]);
  // console.log('langList arr: ', arr)
  let rawList: any[] = [];

  for (let i = 0; i < arr.length; i++) {
    rawList.push(arr[i].toString().split(" ").pop());
  }

  function onlyUnique(value: any, index: any, self: any) {
    return self.indexOf(value) === index;
  }

  const cleanList = rawList.filter(onlyUnique);

  return cleanList;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    option: {
      fontSize: 15,
      "& > span": {
        marginRight: 10,
        fontSize: 18,
      },
    },
  })
);

export default function CityFilter<IAdviceGeo>() {
    const classes = useStyles();
     const { state, actions }: any = useContext(Context);
    const langList = getLangList();

    const handleLangChange = (event: object, value: any) => {
      console.log("handleCityChange: ", value);
      actions({
        type: "setState",
        payload: { ...state, prefLang: value },
      });
    };

  return (
    <>
      <Autocomplete
        id="country-select-demo"
        style={{ width: 300 }}
        options={langList}
        classes={{
          option: classes.option,
        }}
        autoHighlight
        getOptionLabel={(option) => option}
        renderOption={(option) => (
          <React.Fragment>
            <span>{option}</span>
            {/* {option.label} ({option.code}) +{option.phone} */}
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a language"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
        onChange={handleLangChange}
      />
    </>
  );
}