import React from "react";
import { CarouselDefault } from "../components/UI/CarouselDefault";
import { urlsImages, sampleText } from "../data";
import { TitlePages } from "../components/TitlePages";
import { Container } from "../components/UI/Container";
import { ServicesSeccion } from "../components/UI/ServicesSeccion";
export const Home = () => {
  return (
    <div className="flex flex-col justify-between items-center h-full w-full gap-4 p-4">
      <TitlePages text="Welcome to the Home Page" />
      <CarouselDefault UrlList={urlsImages} />
      <div className="flex flex-col gap-3 md:flex-row md:w-2/3">
        <Container title="About Us" paragrad={sampleText}></Container>
        <Container title="About Us" paragrad={sampleText}></Container>
      </div>
      <ServicesSeccion /> 
    </div>
  );
};
