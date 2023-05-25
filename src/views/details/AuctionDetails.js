import React, { useEffect } from "react";

import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

import Card from "../../components/card/Card";

import Nft5 from "./../../assets/img/nfts/Nft5.png";
import Banner from "../../components/card/Banner";
import HistoryItem from "../../components/card/HistoryItem";
import NewBid from "../../components/auctions/NewBid";
import {
  AUCTION_DETAILS,
  AUCTION_DETAILS_SUCCESS,
  useMarketReducer,
} from "../../providers/marketplace";
import { useFetch } from "../../common/useFetch";
import urls from "../../common/urls";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuctionDetails({ id }) {
  const { state, dispatch } = useMarketReducer();
  const toast = useToast();
  const navigate = useNavigate();
  const { data, error, loading } = useFetch(urls.auction.details(id), "GET");
  useEffect(() => {
    if (loading) {
      dispatch({ type: AUCTION_DETAILS, payload: id });
    }
    if (error) {
      console.log(error);
    }
    if (data && data.length > 0) {
      dispatch({ type: AUCTION_DETAILS_SUCCESS, payload: data });
    }
  }, [error, data, loading]);

  function bid(data) {
    axios
      .post(urls.auction.bid(), data)
      .then((res) => {
        toast({
          title: "پیشنهاد با موفقیت فرستاده شد.",
          status: "success",
          position: "bottom-right",
          duration: 9000,
          isClosable: true,
          containerStyle: {
            direction: "rtl",
          },
        });
      })
      .catch((err) => console.log(err));
  }

  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
      >
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
        >
          <Banner />
          <Card p="0px" my="1%">
            <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify="space-between"
              w="100%"
              px="22px"
              py="18px"
            >
              <Text color={textColor} fontSize="xl" fontWeight="600">
                پیشنهاد ها
              </Text>
              <Button variant="action">نمایش همه</Button>
            </Flex>

            {state.auctionDetails.details &&
              state.auctionDetails.details.bidders.map((e) => (
                <HistoryItem
                  name="Colorful Heaven"
                  author="By Mark Benjamin"
                  date="30s ago"
                  image={Nft5}
                  price="0.91 ETH"
                />
              ))}
          </Card>
        </Flex>
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
        >
          <Card p="0px" my="1%">
            <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify="space-between"
              w="100%"
              px="22px"
              py="18px"
            >
              <Text color={textColor} fontSize="xl" fontWeight="600">
                ثبت پیشنهاد
              </Text>
            </Flex>

            <NewBid onSubmit={bid} id={id} />
          </Card>

          <Card p="0px" my="1%">
            <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify="space-between"
              w="100%"
              px="22px"
              py="18px"
            >
              <Text color={textColor} fontSize="xl" fontWeight="600">
                پیشنهاد شما
              </Text>
            </Flex>
          </Card>
          <MyBids textColor={textColor} />
        </Flex>
      </Grid>
    </Box>
  );
}

function MyBids({}) {
  return (
    <>
      <Card p="0px" my="1%">
        <Flex
          align={{ sm: "flex-start", lg: "center" }}
          justify="space-between"
          w="100%"
          px="22px"
          py="18px"
        >
        
        </Flex>
      </Card>
      <Card p="0px" my="1%">
        <Flex
          align={{ sm: "flex-start", lg: "center" }}
          justify="space-between"
          w="100%"
          px="22px"
          py="18px"
        >
          
        </Flex>
      </Card>
    </>
  );
}
