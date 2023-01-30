import { Box } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import AuctionDetails from "../views/details/AuctionDetails";

const Details = () => {
  const params = useParams();
  
  return (
    <>
      <Box>
        <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <AuctionDetails id={params.id}/>
        </div>
      </Box>
    </>
  );
};

export default Details;
