import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as adviceGeo from "../data/adviceGeo.json";
import POIIcon from "../ui/POIIcon.svg";
import LanguagesIcon from "../ui/LanguagesIcon.svg";
// import AdviceSearch from "../components/AdviceSearch";
import { Card } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core";

const shortid = require("shortid");

interface IViewState {
  latitude: number;
  longitude: number;
  height: number;
  width: number;
  zoom: number;
  bearing?: number;
  pitch?: number;
  altitude?: number;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    }
  })
);

export default function AdviceMap() {
  const classes = useStyles();

  const [viewport, setViewport] = useState<IViewState>({
    // Default coordinates to Berlin
    latitude: 52.520008,
    longitude: 13.404954,
    height: 250,
    width: 360,
    zoom: 10
  });

  useEffect(() => {
    console.log("Component mounted");
    navigator.geolocation.getCurrentPosition(pos => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      });
    });
    console.log("Inner vp: ", viewport);
    console.log("Current pos: ", navigator.geolocation);
  });

  const [selectedAdvice, setSelectedAdvice] = useState(null);

  return (
    <>
      <Card className={classes.root}>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={viewport => setViewport(viewport)}
          mapStyle="mapbox://styles/stevejt/ck8htanhp0bec1inyuih6ps92"
        >
          <Marker
            key={shortid.generate()}
            latitude={viewport.latitude}
            longitude={viewport.longitude}
          >
            <button>
              <img src={LanguagesIcon} alt="user location ison" />
            </button>
          </Marker>
          {adviceGeo.features.map((adviser: any) => (
            <Marker
              key={shortid.generate()}
              latitude={Number(adviser.geometry.coordinates[1])}
              longitude={Number(adviser.geometry.coordinates[0])}
            >
              <button
                onClick={e => {
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
              onClose={() => {
                setSelectedAdvice(null);
              }}
              captureClick={true}
            >
              <h4>{selectedAdvice.properties.name}</h4>
              <p>
                <img src={LanguagesIcon} alt="Languages icon" />
                {selectedAdvice.properties.language}
              </p>

              <button
                onClick={() =>
                  console.log("Selected adviser: ", selectedAdvice)
                }
              >
                More details
              </button>
            </Popup>
          ) : null}
          ;
        </ReactMapGL>
      </Card>
    </>
  );
}

/* <AdviceSearch /> */
