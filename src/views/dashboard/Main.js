import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  GridItem,
  Icon, SimpleGrid,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import { MdAddTask, MdFileCopy } from "react-icons/md";
import MiniStatistics from "../../components/card/MiniStatistics";
import PieChart from "../../components/charts/PieChart";
import ColumnsTable from "../../components/ColumnsTable";
import IconBox from "../../components/icons/IconBox";
import { useWalletReducer } from "../../providers/wallet";

import ETH from "./../../assets/img/dashboards/eth_image.png";
export default function Main() {
  const { state, refresh } = useWalletReducer();
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 4 }}
        gap="20px"
        mb="20px"
      >
        <GridItem colSpan={2}>
          <MiniStatistics
            endContent={
              <Flex me="-16px" mt="10px">
                <Text
                  id="balance"
                  variant="mini"
                  mt="20px"
                  me="10px"
                  defaultValue="0x0"
                >
                  {state.walletAddress}
                </Text>
                <FormLabel htmlFor="balance">
                  <Avatar src={ETH} />
                </FormLabel>
              </Flex>
            }
            name="موجودی حساب"
            value={state.ethBalance + "ETH"}
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
          value="1"
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
          value="1"
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
        />
        {state.tokens.length > 0 && <PieChart data={[state.tokens.map((c) => c.balance)]} labels={[state.tokens.map((c) => c.symbol)]} />}
      </SimpleGrid>
    </Box>
  );
}
export const columnsDataColumns = [
  {
    Header: "Symbol",
    accessor: "symbol",
  },
  {
    Header: "Contract Address",
    accessor: "contract_address",
  },
  {
    Header: "Balance",
    accessor: "balance",
  },
];
