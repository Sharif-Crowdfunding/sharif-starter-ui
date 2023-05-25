import { Box } from "@chakra-ui/react";
import * as React from "react";
import Footer from "../views/home/Footer";
import Hero from "../views/home/Hero";
import Introduction from "../views/home/Introduction";

function Home() {
  return (
    <Box>
      <Hero />
      <Introduction />
      <Footer />
    </Box>
  );
}

export default Home;
