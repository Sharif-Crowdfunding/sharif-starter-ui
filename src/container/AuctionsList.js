import Auction from "../components/card/Auction";
import { auctions } from "../components/mock/landingAuctions";
import {
  SimpleGrid,
  useColorModeValue,
  Stack,
  Heading,
  Box,
} from "@chakra-ui/react";

const ActionsList = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")} p={3} mb={5}>
      <Stack spacing={0} align={"center"}>
        <Heading fontFamily={"MyShFont"}>مزایده های فعال بازار</Heading>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 5 }} gap="20px" m={5}>
        {" "}
        {auctions.map((a) => (
          <Auction
            id={a.id}
            name={a.project.symbol}
            author={a.project.creator}
            image={a.project.image}
            minimumbidpertoken={a.minimum_bid_per_token}
            saleToken={a.sale_token_num}
            liked={a.is_liked}
            endtime={a.end_time}
            inProgress={!(a.is_ended || a.is_canceled)}
            isMine
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ActionsList;
