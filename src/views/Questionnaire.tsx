import React from "react";
import questionImg from "../ui/QuestionairePicture.jpg";
import QuestionForm from "../components/QuestionForm";

import { CardMedia } from "@material-ui/core/";

export default function Questionnaire() {
  return (
    <>
      <CardMedia src={questionImg} component="img"></CardMedia>

      <QuestionForm />
    </>
  );
}
