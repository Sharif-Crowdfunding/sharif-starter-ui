import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Progress,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { useToast } from "@chakra-ui/react";
const Project = ({ state, setState }) => {
  return (
    <Box>
      <Heading
        w="100%"
        textAlign={"center"}
        fontWeight="normal"
        fontFamily={"MyShFont"}
      >
        اطلاعات پروژه
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
            نام پروژه
          </FormLabel>
          <InputGroup size="sm">
            <Input
              type="text"
              placeholder="نام"
              focusBorderColor="brand.400"
              rounded="md"
              onChange={(e) => setState({ ...state, name: e.target.value })}
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
            آدرس عکس
          </FormLabel>
          <InputGroup size="sm">
            <Input
              type="text"
              placeholder="آدرس عکس"
              focusBorderColor="brand.400"
              rounded="md"
              onChange={(e) => setState({ ...state, image: e.target.value })}
            />{" "}
          </InputGroup>
        </FormControl>
      </SimpleGrid>
    </Box>
  );
};

const BasicInfo = ({ state, setState }) => {
  return (
    <Box>
      <Heading
        w="100%"
        textAlign={"center"}
        fontWeight="normal"
        fontFamily={"MyShFont"}
      >
        شبکه های اجتماعی
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
            آدرس سایت
          </FormLabel>
          <InputGroup size="sm">
            <Input
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
              onChange={(e) => setState({ ...state, website: e.target.value })}
            />{" "}
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: "gray.800",
              }}
              color="gray.500"
              rounded="md"
            >
              http
            </InputLeftAddon>
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
            آدرس تلگرام
          </FormLabel>
          <InputGroup size="sm">
            <Input
              type="tel"
              placeholder="آیدی تلگرام خود را وارد کنید..."
              focusBorderColor="brand.400"
              rounded="md"
              onChange={(e) =>
                setState({ ...state, telegram_id: e.target.value })
              }
            />{" "}
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: "gray.800",
              }}
              color="gray.500"
              rounded="md"
            >
              @
            </InputLeftAddon>
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
            آدرس گیتهاب
          </FormLabel>
          <InputGroup size="sm">
            <Input
              type="tel"
              placeholder="آیدی گیتهاب خود را وارد کنید..."
              focusBorderColor="brand.400"
              rounded="md"
              onChange={(e) =>
                setState({ ...state, github_id: e.target.value })
              }
            />
          </InputGroup>
        </FormControl>
        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            توضیحات
          </FormLabel>
          <Textarea
            placeholder="you@example.com"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: "sm",
            }}
            onChange={(e) => setState({ ...state, details: e.target.value })}
          />
        </FormControl>
      </SimpleGrid>
    </Box>
  );
};

const TokenInfo = ({ state, setState }) => {
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
            نام نماد
          </FormLabel>
          <InputGroup size="sm">
            <Input
              type="tel"
              placeholder="نماد منتخب را وارد کنید..."
              focusBorderColor="brand.400"
              rounded="md"
              onChange={(e) => setState({ ...state, symbol: e.target.value })}
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
            تعداد توکن
          </FormLabel>
          <InputGroup size="sm">
            <Input
              type="number"
              placeholder="تعدادتوکن برای نماد خود را وارد کنید..."
              focusBorderColor="brand.400"
              rounded="md"
              onChange={(e) =>
                setState({ ...state, total_supply: parseInt(e.target.value) })
              }
            />
          </InputGroup>
        </FormControl>
      </SimpleGrid>
    </Box>
  );
};

export default function MultiStep({ onSubmit }) {
  const [basicInfo, setBasicInfo] = useState({
    telegram_id: "",
    github_id: "",
    website: "",
    details: "",
  });
  const [tokenInfo, setTokenInfo] = useState({
    symbol: "",
    total_supply: 0,
  });
  const [project, setProject] = useState({
    name: "",
    image: "",
    basic_info: {},
    token_info: {},
  });

  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
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
          <Project state={project} setState={setProject} />
        ) : step === 2 ? (
          <TokenInfo state={tokenInfo} setState={setTokenInfo} />
        ) : (
          <BasicInfo state={basicInfo} setState={setBasicInfo} />
        )}
        <ButtonGroup mt="5%" w="100%" dir="ltr">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
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
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                بعد
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  onSubmit({
                    ...project,
                    token_info: tokenInfo,
                    basic_info: basicInfo,
                  });
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
