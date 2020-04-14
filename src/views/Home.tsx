import React from "react";
import AdviceMap from "../components/AdviceMap";



function OverviewCard() {
  // const classes = useStyles();
  return (
    <>
      <AdviceMap />
    </>
  );
}

function LawyerMap() {
  return <></>;
}

export function Home() {
  return (
    <>
      <OverviewCard />
      <LawyerMap />
    </>
  );
}
