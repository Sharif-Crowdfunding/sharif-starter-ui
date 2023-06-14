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
import axios from "axios";
import { useToast } from "@chakra-ui/react";
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
            author={"تعداد توکن: " + b.token_num}
            image={Avatar}
            price={b.total_val}
          />
        ))
      )}
    </>
  );
}

export function MyBid({ id }) {
  const toast=useToast();
  const { data, error, loading } = useFetch(urls.auction.myBid(id), "GET");
  const [state, setState] = useState();
  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (data && data.length > 0) {
      setState(data);
    }
  }, [error, data, loading]);

  function cancelbid(id) {
    axios
      .get(urls.auction.cancelBid(id))
      .then((res) => {
        toast({
          title: "حذف پیشنهاد با موفقیت انجام شد.",
          status: "success",
          position: "bottom-right",
          duration: 9000,
          isClosable: true,
          containerStyle: {
            direction: "rtl",
          },
        });
      })
      .catch((err) => {
        toast({
          title: "حذف ناموفق بود.",
          status: "error",
          position: "bottom-right",
          duration: 9000,
          isClosable: true,
          containerStyle: {
            direction: "rtl",
          },
        });
        console.log(err);
      });
  }
  
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
              <Text>قیمت هر توکن:{state[0].token_val / 10 ** 15}</Text>
              <Text>کل مبلغ پیشنهادی: {state[0].total_val / 10 ** 15}</Text>
            </VStack>
            <Button colorScheme="red" h={"90%"} onClick={() => cancelbid(id)}>
              حذف
            </Button>
          </Flex>
        </Card>
      )}
    </>
  );
}


