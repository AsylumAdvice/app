import React, { useContext } from "react";
import Context from "../store/context";
import adviceGeo from "../data/adviceGeo.json";
import { getValues } from "../components/getObjects";
import search from "../components/geocodeSearch";
// Material-ui
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";

const getCityList = () => {
    const obj = getValues(adviceGeo, "postcode_city");
    const arr = Object.keys(obj).map((key) => obj[key]);
    let rawList: any[] = [];

    for (let i = 0; i < arr.length; i++) {
        rawList.push(
          arr[i]
            .toString()
            .split(" ")
            .pop()
        );
    }

    function onlyUnique(value:any, index:any, self:any) {
      return self.indexOf(value) === index;
    };

    const cleanList = rawList.filter(onlyUnique)

    return cleanList
};

const defaultProps = {
  endpoint: "https://api.tiles.mapbox.com",
  inputClass: "",
  resultClass: "",
  resultsClass: "",
  resultFocusClass: "strong",
  inputPosition: "top",
  inputPlaceholder: "Search",
  showLoader: false,
  source: "mapbox.places",
  proximity: "",
  bbox: "",
  types: "",
  onSuggest: function () {},
  focusOnMount: true,
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

export default function CityFilter() {
    const classes = useStyles();
    const cityList = getCityList();
    const { state, actions }: any = useContext(Context);

    const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

    const handleCityChange = (event: object, value: any) => {
      actions({
        type: "setState",
        payload: { ...state, prefCity: value },
      });
      
      const query = value;

      const onResult = (res: any) => {
    
        actions({
          type: "setState",
          payload: {
            ...state,
            latitude: res.data.features[0].geometry.coordinates[1],
            longitude: res.data.features[0].geometry.coordinates[0],
          },
        });
      };

      // Get lat and lon
      search(
        defaultProps.endpoint,
        defaultProps.source,
        accessToken,
        defaultProps.proximity,
        defaultProps.bbox,
        defaultProps.types,
        query,
        onResult
      );
      // setState viewport
      
    };

    return (
      <>
        <Autocomplete
          id="country-select-demo"
          style={{ width: 300 }}
          options={cityList}
          classes={{
            option: classes.option,
          }}
          autoHighlight
          getOptionLabel={(option) => option}
          renderOption={(option) => (
            <React.Fragment>
              <span key={option}>{option}</span>
              {/* {option.label} ({option.code}) +{option.phone} */}
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a city"
              variant="outlined"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
          onChange={handleCityChange}
        />
      </>
    );
}