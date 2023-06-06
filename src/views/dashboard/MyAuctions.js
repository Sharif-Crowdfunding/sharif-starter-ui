import { useAuth } from "../../providers/auth";
import Auction from "../../components/card/Auction";
import { Flex, Text, useColorModeValue, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const MyAuctions = ({ auctions, isLoading }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const textColor = useColorModeValue("secondaryGray.900", "white");
  
  return (
    <>
      <Flex
        mt="45px"
        mb="20px"
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
        align={{ base: "start", md: "center" }}
      >
        <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
          حراجی های من
        </Text>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 5 }} gap="20px">
        {isLoading ? (
          <Spinner size={"lg"} m="20px" />
        ) : (
          auctions.map((a) =>
            a.creator === user.data.username ? (
              <Auction
                id={a.id}
                name={a.project.symbol}
                author={a.project.creator}
                bidders={a.bidders}
                image={a.project.image}
                minimumbidpertoken={a.minimum_bid_per_token}
                saleToken={a.sale_token_num}
                onBid={() => navigate("/d/details/" + a.id)}
                liked={a.is_liked}
                endtime={a.end_time}
                inProgress={!(a.is_ended || a.is_canceled)}
                isMine
              />
            ) : null
          )
        )}
      </SimpleGrid>
    </>
  );
};

export default MyAuctions;
