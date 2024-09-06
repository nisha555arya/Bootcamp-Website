import React from "react";
import { Box, Typography, Button ,Container,TextField} from "@mui/material";
import { Cardsection } from "../Component/Cardpage/Cardsection";
import { About } from "./About";
import { Contact } from "./Contact";
import { ShowCase } from "../Component/ShowCase";
import { NewsletterSec } from "../Component/NewsletterSec";
import { QuestionPage } from "./QuestionPage";


export const Home = () => {
  return (
    <>
      <ShowCase/>
      <NewsletterSec/>
      <Cardsection />
      <About/>
      <QuestionPage/>
      <Contact/>
    </>
  );
};
