// Chakra imports
import {
    Avatar,
  Button,
  Card,
  Flex,
  Spinner,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useFetch } from "../../common/useFetch";
import urls from "../../common/urls";
import HistoryItem from "./HistoryItem";

export function Bids({ id }) {
  const { data, error, loading } = useFetch(urls.auction.getBids(id), "GET");
  const [bids, setBids] = useState();
  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (data && data.length > 0) {
      setBids(data);
    }
  }, [error, data, loading]);
  const textColor = useColorModeValue("navy.700", "white");
  const textColorBid = useColorModeValue("brand.500", "white");
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        bids &&
        bids.map((b) => (
            <HistoryItem
            name={b.bidder.username}
            author={"تعداد توکن: " + b.token_num }
            // date={b.token_num}
            image={Avatar}
            price={b.total_val/(10**18) + " ETH"}
          />
        ))
      )}
    </>
  );
}

export function MyBid({ id }) {
  const { data, error, loading } = useFetch(urls.auction.myBid(id), "GET");
  const [state, setState] = useState();
  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (data && data.length > 0) {
      console.log("hello2");
      setState(data);
    }
  }, [error, data, loading]);
  return (
    <>
      {state && (
        <Card p="0px" my="1%" variant="elevated">
          <Flex
            align={{ sm: "flex-start" }}
            justify="space-between"
            w="100%"
            px="22px"
            py="18px"
          >
            <VStack>
              <Text>تعداد توکن:{state[0].token_num}</Text>
              <Text>قیمت هر توکن:{state[0].token_val}</Text>
              <Text>کل مبلغ پیشنهادی: {state[0].total_val}</Text>
            </VStack>
            <Button colorScheme="red" h={"90%"}>
              حذف
            </Button>
          </Flex>
        </Card>
      )}
    </>
  );
}
