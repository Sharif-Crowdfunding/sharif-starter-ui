import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  Heading,
  Input,
  InputGroup,
  Progress,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";

const AuctionTimeForm = ({ state, setState }) => {
  return (
    <Box>
      <Heading
        w="100%"
        textAlign={"center"}
        fontWeight="normal"
        fontFamily={"MyShFont"}
      >
        اطلاعات زمانی
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            زمان شروع{" "}
          </FormLabel>
          <InputGroup size="sm">
            <Input
              type="date"
              placeholder="زمان شروع حراجی را وارد کنید..."
              focusBorderColor="brand.400"
              rounded="md"
              onChange={(e) =>
                setState({
                  ...state,
                  start_time: Math.floor(
                    new Date(e.target.value).getTime() / 1000
                  ),
                })
              }
            />{" "}
          </InputGroup>
        </FormControl>{" "}
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            زمان پایان حراج
          </FormLabel>
          <InputGroup size="sm">
            <Input
              type="time"
              placeholder="طول مدت حراجی راوارد کنید..."
              focusBorderColor="brand.400"
              rounded="md"
              onChange={(e) =>
                setState({
                  ...state,
                  end_time: state.start_time + getSecond(e.target.value),
                })
              }
            />{" "}
          </InputGroup>
        </FormControl>
      </SimpleGrid>
    </Box>
  );
};

function getSecond(time) {
  var a = time.split(":");
  var seconds = +a[0] * 60 * 60 + +a[1] * 60;
  return seconds;
}
const BasicAuctionInfo = ({ state, setState }) => {
  return (
    <Box>
      <Heading
        w="100%"
        textAlign={"center"}
        fontWeight="normal"
        fontFamily={"MyShFont"}
      >
        اطلاعات توکن
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            تعدادتوکن برای فروش
          </FormLabel>
          <InputGroup size="sm">
            <Input
              type="number"
              placeholder="تعدادتوکن برای فروش را وارد کنید..."
              focusBorderColor="brand.400"
              rounded="md"
              onChange={(e) =>
                setState({ ...state, sale_token_num: parseInt(e.target.value) })
              }
            />
          </InputGroup>
        </FormControl>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            ارزش هر توکن (بر اساس Wei)
          </FormLabel>
          <InputGroup size="sm">
            <Input
              type="number"
              placeholder="تعدادتوکن برای نماد خود را وارد کنید..."
              focusBorderColor="brand.400"
              rounded="md"
              onChange={(e) =>
                setState({
                  ...state,
                  minimum_value_per_token: parseInt(e.target.value),
                })
              }
            />
          </InputGroup>{" "}
          <FormHelperText>
            {parseFloat(state.minimum_value_per_token) / 10 ** 18} اتریوم
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </Box>
  );
};

export default function AuctionForm({ onSubmit, symbol }) {
  const [auction, setAuction] = useState({
    sale_token_num: 0,
    minimum_value_per_token: 0,
    end_time: 0,
    start_time: 0,
    symbol: symbol,
  });

  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          dir="ltr"
          width={"90%"}
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? (
          <BasicAuctionInfo state={auction} setState={setAuction} />
        ) : (
          <AuctionTimeForm state={auction} setState={setAuction} />
        )}
        <ButtonGroup mt="5%" w="100%" dir="ltr">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 50);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                بازگشت
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 2}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 2) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 50);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                بعد
              </Button>
            </Flex>
            {step === 2 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  onSubmit(auction);
                }}
              >
                ثبت
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
