import React, { useEffect } from "react";

import {
  Box,
  Flex,
  Grid, SimpleGrid,
  Spinner,
  Text,
  useColorModeValue,
  useToast
} from "@chakra-ui/react";

import Auction from "../../components/card/Auction";

import { useNavigate } from "react-router-dom";
import Nft3 from "../../assets/img/nfts/Nft3.png";
import urls from "../../common/urls";
import { useFetch } from "../../common/useFetch";
import {
  MARKET_REFRESH,
  MARKET_REFRESH_SUCCESS,
  useMarketReducer
} from "../../providers/marketplace";

export default function Marketplace() {
  const { state, dispatch } = useMarketReducer();
  const toast = useToast();
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
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
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
          <Flex direction="column">
            <Flex
              mt="45px"
              mb="20px"
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
            >
              <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                حراجی های موردعلاقه
              </Text>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 4 }} gap="20px">
              {state.isLoading ? (
                <Spinner size={"lg"} m="20px" />
              ) : (
                state.auctions.map((a) =>
                  a.is_liked ? (
                    <Auction
                      name={a.project.symbol}
                      author={a.project.creator}
                      bidders={a.bidders}
                      image={Nft3}
                      minimumbidPertoken="0.1 ETH"
                      currentbid="0.91 ETH"
                      download="#"
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
              حراجی های بازار
            </Text>
            <SimpleGrid
              columns={{ base: 1, md: 4 }}
              gap="20px"
              mb={{ base: "20px", xl: "0px" }}
            >
              {state.isLoading ? (
                <Spinner size={"lg"} m="20px" />
              ) : (
                state.auctions.map((a) => (
                  <Auction
                    name={a.project.symbol}
                    author={a.project.creator}
                    bidders={a.bidders}
                    image={a.project.image}
                    minimumbidpertoken={a.minimum_bid_per_token}
                    saleToken={a.sale_token_num}
                    onBid={() => navigate("/d/details/" + a.id)}
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
