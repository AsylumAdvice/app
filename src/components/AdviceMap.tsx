import React, { useState, useContext } from "react";
import Context from "../store/context";
import ReactMapGL, {
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import adviceGeo from "../data/adviceGeo.json";
// console.log("adviceGeo: ", adviceGeo);
import CityFilter from "../components/CityFilter";
import LangFilter from "../components/LangFilter";

import { Button, Card, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core";
import POIIcon from "../ui/POIIcon.svg";
import LanguagesIcon from "../ui/LanguagesIcon.svg";

import { Link } from "react-router-dom";

const shortid = require("shortid");

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    icon: {
      color: theme.palette.text.secondary,
      marginRight: theme.spacing(2),
    },
    option: {
      fontSize: 15,
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    },
  })
);

const geolocateStyle: any = {
  position: "absolute",
  top: 0,
  left: 0,
  margin: 10,
};

export default function AdviceMap() {
  const classes = useStyles();
  const { state, actions }: any = useContext(Context);
  // console.log('adviceMap State: ', state);

  // Adisor selection
  const [selectedAdvice, setSelectedAdvice] = useState(null);

  const handleSelectedAdvisor = (event: object, value: any) => {
    console.log("Selected adviser: ", value);
    actions({
      type: "setState",
      payload: { ...state, selectedAdisor: value },
    });
  };

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        color="textPrimary"
        gutterBottom={true}
      >
        Legal advisors and lawyers near you
      </Typography>
      <Card className={classes.root}>
        <ReactMapGL
          {...state}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(viewport) => {
              actions({
              type: "setState",
              payload: {
                ...state,
                height: state.height,
                width: state.width,
                latitude: state.latitude,
                longitude: state.longitude,
              },
            })} 
          }
          mapStyle="mapbox://styles/stevejt/ck8htanhp0bec1inyuih6ps92" 
        >
          <GeolocateControl
            style={geolocateStyle}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
            showUserLocation={true}
          />
          <div style={{ position: "absolute", right: 0 }}>
            <NavigationControl showCompass={false} />
          </div>

          {adviceGeo.features.map((adviser: any) => (
            <Marker
              key={shortid.generate()}
              latitude={Number(adviser.geometry.coordinates[1])}
              longitude={Number(adviser.geometry.coordinates[0])}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedAdvice(adviser);
                }}
              >
                <img src={POIIcon} alt="Advice Centre Icon" />
              </button>
            </Marker>
          ))}

          {selectedAdvice ? (
            <Popup
              latitude={Number(selectedAdvice.geometry.coordinates[1])}
              longitude={Number(selectedAdvice.geometry.coordinates[0])}
              closeButton={true}
              closeOnClick={false}
              onClose={() => {
                setSelectedAdvice(null);
              }}
              captureClick={true}
              dynamicPosition={true}
            >
              <div>
                <h5>{selectedAdvice.properties.name}</h5>
                <p>
                  <img src={LanguagesIcon} alt="Languages icon" />
                  {selectedAdvice.properties.language}
                </p>
              </div>

              <Button
                // TODO create selected advisor list
                // onClick={() =>
                //   console.log("Selected adviser: ", selectedAdvice)
                // }
                onClick={() => handleSelectedAdvisor}
                variant="contained"
                color="primary"
                type="submit"
                component={Link}
                to={"/advisors"}
              >
                More details
              </Button>
            </Popup>
          ) : null}
        </ReactMapGL>
      </Card>

      {/* Filters */}

      <CityFilter />

      <LangFilter />

      {/* Buttons */}

      <Button
        variant="contained"
        color="primary"
        type="submit"
        component={Link}
        to={"/questionaire"}
      >
        Start by getting an overview oy your asylum procedure
      </Button>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        component={Link}
        to={"/articles"}
      >
        Search information about specific topics
      </Button>
    </>
  );
}
