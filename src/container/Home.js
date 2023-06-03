import { Box } from "@chakra-ui/react";
import * as React from "react";
import Footer from "../views/home/Footer";
import Hero from "../views/home/Hero";
import Introduction from "../views/home/Introduction";
import ActionsList from "./AuctionsList";

function Home() {
  return (
    <Box>
      <Hero />
      <ActionsList />
      <Introduction />
      <Footer />
    </Box>
  );
}

export default Home;
