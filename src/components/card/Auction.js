// Chakra imports
import {
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
  useColorModeValue,
  useToast
} from "@chakra-ui/react";
import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

import axios from "axios";
import moment from "moment";
import urls from "../../common/urls";
import { useMarketReducer } from "../../providers/marketplace";
import ImageWithOverlay from "../ImageOverlay";

export default function Auction(props) {
  const toast = useToast();

  const { dispatch } = useMarketReducer();
  const {
    image,
    name,
    author,
    bidders,
    onBid,
    saleToken,
    minimumbidpertoken,
    liked,
    isMine,
    endtime,
    id,
    inProgress,
  } = props;
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}/d/details/${id}`
      );
      toast({
        title: "کپی شد",
        status: "success",
        position: "bottom-right",
        duration: 9000,
        isClosable: true,
        containerStyle: {
          direction: "rtl",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  const textColor = useColorModeValue("navy.700", "white");
  const textColorBid = useColorModeValue("brand.500", "white");

  return (
    <Card
      p="20px"
      width="95%"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      }}
    >
      <Flex direction={{ base: "column" }} justify="center">
        <Box mb={{ base: "20px", "2xl": "20px" }} position="relative">
          <ImageWithOverlay image={image} time={endtime} />
        </Box>
        <HStack
          style={{
            direction: "ltr",
            marginTop: "-25px",
            marginBottom: "20px",
            alignSelf: "center",
          }}
        >
          <Button
            bg="none"
            _hover={{ bg: "whiteAlpha.900" }}
            _active={{ bg: "white" }}
            _focus={{ bg: "white" }}
            p="0px !important"
            top="14px"
            right="14px"
            borderRadius="50%"
            minW="36px"
            h="36px"
            onClick={() => {
              likeAuction(id);
              dispatch({ type: "LIKE_AUCTION", payload: id });
            }}
          >
            <Icon
              transition="0.2s linear"
              w="20px"
              h="20px"
              as={liked ? IoHeart : IoHeartOutline}
              color="brand.500"
            />
          </Button>
          <Button
            bg="none  "
            _hover={{ bg: "whiteAlpha.900" }}
            _active={{ bg: "white" }}
            _focus={{ bg: "white" }}
            p="0px !important"
            top="14px"
            left="14px"
            borderRadius="50%"
            minW="36px"
            h="36px"
            onClick={() => {
              handleCopyClick();
            }}
          >
            <Icon
              transition="0.2s linear"
              w="20px"
              h="20px"
              as={FaShareAlt}
              color="brand.500"
            />
          </Button>
        </HStack>
        <Flex flexDirection="column" justify="space-between" h="100%">
          <Flex
            justify="space-between"
            direction={{
              base: "row",
              md: "column",
              lg: "column",
              xl: "column",
              "2xl": "column",
            }}
            mb="auto"
          >
            <Flex direction="column">
              <Text
                color={textColor}
                fontSize={{
                  base: "xl",
                  md: "lg",
                  lg: "lg",
                  xl: "lg",
                  "2xl": "md",
                  "3xl": "lg",
                }}
                mb="5px"
                fontWeight="bold"
                me="14px"
              >
                {name}
              </Text>
              <Text
                color="secondaryGray.600"
                fontSize={{
                  base: "sm",
                }}
                fontWeight="400"
                me="14px"
              >
                {author}
              </Text>
            </Flex>
          </Flex>
          <VStack mb="5%">
            <HStack>
              <Text fontWeight="500" fontSize="sm" color={textColorBid}>
                تعداد توکن مزایده:{" "}
              </Text>
              <Text fontWeight="500" fontSize="sm" color={textColorBid}>
                {saleToken}
              </Text>
            </HStack>
            <HStack>
              <Text fontWeight="500" fontSize="sm" color={textColorBid}>
                کمترین پیشنهاد :
              </Text>
              <Text fontWeight="500" fontSize="sm" color={textColorBid}>
                {minimumbidpertoken / 10 ** 15} ریال
              </Text>
            </HStack>
          </VStack>
        </Flex>
      </Flex>
      {isMine && inProgress && getMyAction(endtime, id, dispatch, toast)}
      <Button
        variant="darkBrand"
        color="white"
        fontSize="sm"
        fontWeight="500"
        px="24px"
        py="5px"
        onClick={onBid}
      >
        مشاهده
      </Button>{" "}
    </Card>
  );
}
function getMaxBid(bidders) {
  let max = 0;
  for (let i = 0; i < bidders.length; i++) {
    const element = bidders[i];
    if (element.total_value > max) max = element.total_value;
  }
  return max;
}
function likeAuction(id) {
  axios.get(urls.auction.likeAuction(id), "GET");
}

function getMyAction(endtime, id, dispatch, toast) {
  const deadline = moment.unix(endtime);
  const now = moment();
  const diff = deadline.diff(now);
  return (
    <>
      <Button
        isDisabled={diff > 0}
        mb="5px"
        variant="solid"
        colorScheme="teal"
        fontSize="sm"
        fontWeight="500"
        px="24px"
        py="5px"
        onClick={() => {
          axios.get(urls.auction.endAuction(id));
          dispatch({ type: "END_AUCTION", payload: id });
          toast({
            title: "عملیات با موفقیت انجام شد.  ",
            status: "success",
            position: "bottom-right",
            duration: 9000,
            isClosable: true,
            containerStyle: {
              direction: "rtl",
            },
          });
        }}
      >
        اتمام مزایده
      </Button>
      <Button
        isDisabled={diff <= 0}
        mb="5px"
        variant="solid"
        colorScheme="red"
        fontSize="sm"
        fontWeight="500"
        px="24px"
        py="5px"
        onClick={() => {
          axios.get(urls.auction.cancelAuction(id));
          dispatch({ type: "CANCEL_AUCTION", payload: id });
          toast({
            title: "عملیات با موفقیت انجام شد.  ",
            status: "success",
            position: "bottom-right",
            duration: 9000,
            isClosable: true,
            containerStyle: {
              direction: "rtl",
            },
          });
        }}
      >
        لغو مزایده
      </Button>
    </>
  );
}
