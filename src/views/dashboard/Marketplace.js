import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Grid,
  SimpleGrid,
  Spinner,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Auction from "../../components/card/Auction";
import { useNavigate } from "react-router-dom";
import urls from "../../common/urls";
import { useFetch } from "../../common/useFetch";
import {
  MARKET_REFRESH,
  MARKET_REFRESH_SUCCESS,
  useMarketReducer,
} from "../../providers/marketplace";
import MyAuctions from "./MyAuctions";

export default function Marketplace() {
  const { marketState, dispatch } = useMarketReducer();
  const navigate = useNavigate();
  const { data, error, loading } = useFetch(urls.auction.market(), "GET");
  
  useEffect(() => {
    if (loading) {
      dispatch({ type: MARKET_REFRESH });
    }
    if (error) {
      console.log(error);
    }
    if (data && !loading) {
      dispatch({ type: MARKET_REFRESH_SUCCESS, payload: data });
    }
  }, [error, data, loading]);
  
  const textColor = useColorModeValue("secondaryGray.900", "white");
  
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      <Grid
        mb="20px"
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
      >
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
        >
          <MyAuctions auctions={marketState.auctions} isLoading={marketState.isLoading}/>
          <Flex direction="column">
            <Flex
              mt="45px"
              mb="20px"
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
            >
              <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
              مزایده‌های موردعلاقه
              </Text>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 5 }} gap="20px">
              {marketState.isLoading ? (
                <Spinner size={"lg"} m="20px" />
              ) : (
                marketState.auctions.map((a) =>
                  a.is_liked ? (
                    <Auction
                      id={a.id}
                      name={a.project.symbol}
                      author={a.project.creator}
                      bidders={a.bidders}
                      image={a.project.image}
                      minimumbidpertoken={a.minimum_bid_per_token}
                      saleToken={a.sale_token_num}
                      onBid={() => navigate("/d/details/" + a.id)}
                      endtime={a.end_time}
                      liked={a.is_liked}
                      
                    />
                  ) : null
                )
              )}
            </SimpleGrid>
            <Text
              mt="45px"
              mb="36px"
              color={textColor}
              fontSize="2xl"
              ms="24px"
              fontWeight="700"
            >
              مزایده‌های بازار
            </Text>
            <SimpleGrid
              columns={{ base: 1, md: 5 }}
              gap="20px"
              mb={{ base: "20px", xl: "0px" }}
            >
              {marketState.isLoading ? (
                <Spinner size={"lg"} m="20px" />
              ) : (
                marketState.auctions.map((a) => (
                  <Auction
                    id={a.id}
                    name={a.project.symbol}
                    author={a.project.creator}
                    bidders={a.bidders}
                    image={a.project.image}
                    minimumbidpertoken={a.minimum_bid_per_token}
                    saleToken={a.sale_token_num}
                    onBid={() => navigate("/d/details/" + a.id)}
                    endtime={a.end_time}
                    liked={a.is_liked}
                  />
                ))
              )}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Grid>
    </Box>
  );
}
