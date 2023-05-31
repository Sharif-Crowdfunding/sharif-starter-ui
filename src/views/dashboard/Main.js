import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  GridItem,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { MdAddTask, MdFileCopy } from "react-icons/md";
import urls from "../../common/urls";
import MiniStatistics from "../../components/card/MiniStatistics";
import PieChart from "../../components/charts/PieChart";
import ColumnsTable from "../../components/ColumnsTable";
import IconBox from "../../components/icons/IconBox";
import { useWalletReducer } from "../../providers/wallet";

import ETH from "./../../assets/img/dashboards/eth_image.png";
export default function Main() {
  const { state, refresh } = useWalletReducer();
  const toast = useToast();
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  useEffect(() => {
    refresh()
  }, [])
  
  function createAuction(auction) {
    axios
      .post(urls.auction.create(), auction)
      .then((res) => {
        toast({
          title: "حراج با موفقیت ساخته شد.",
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
          title: "ساخت حراج ناموفق بود.",
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

  function transferToken(tx) {
    axios
      .post(urls.project.transfer(), tx)
      .then((res) => {
        toast({
          title: "انتقال با موفقیت انجام شد.",
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
          title: "انتقال ناموفق بود.",
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
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 4 }}
        gap="20px"
        mb="20px"
      >
        <GridItem colSpan={2}>
          <MiniStatistics
            name="موجودی حساب"
            value={parseInt(state.ethBalance*1000)}
            secondValue = "ریال"
          />
        </GridItem>
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"
              icon={<Icon w="28px" h="28px" as={MdAddTask} color="white" />}
            />
          }
          name="تعداد حراجی ها"
          value={state.auctionNum}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name="تعداد پروژه ها"
          value={state.projectNum}
        />
      </SimpleGrid>

      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: "20px", xl: "20px" }}
      >
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={state.tokens}
          tableName="توکن ها"
          refresh={refresh}
          onAction={createAuction}
          onTransfer={transferToken}
        />
        {state.tokens.length > 0 && (
          <PieChart
            data={state.tokens.map((c) => c.balance)}
            labels={state.tokens.map((c) => " "+c.symbol+" ")}
          />
        )}
      </SimpleGrid>
    </Box>
  );
}
export const columnsDataColumns = [
  {
    Header: "نماد",
    accessor: "symbol",
  },
  {
    Header: "آدرس کانترکت",
    accessor: "contract_address",
  },
  {
    Header: "موجودی",
    accessor: "balance",
  },
  {
    Header: "عملیات",
    accessor: "action",
  },
];
