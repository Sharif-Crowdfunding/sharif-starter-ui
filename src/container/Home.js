import { Box } from "@chakra-ui/react";
import * as React from "react";
import Features from "../views/home/Feature";
import Footer from "../views/home/Footer";
import Hero from "../views/home/Hero";
import Introduction from "../views/home/Introduction";
import BasicStatistics from "../views/home/Stats";

function Home() {
  return (
    <Box>
      <Hero />
      <BasicStatistics />
      <Features />
      <Introduction />
      <Footer />
    </Box>
  );
}

export default Home;
