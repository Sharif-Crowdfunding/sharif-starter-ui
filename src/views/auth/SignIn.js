import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { useAuth } from "../../providers/auth";
import axios from "axios";
import urls from "../../common/urls";

function SignIn() {
  const navigate = useNavigate();
  const toast = useToast();
  const { user } = useAuth();
  if (user.isAuthenticated) {
    navigate("/d/main");
  }

  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  function login() {
    axios
      .post(urls.auth.login(), {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/d/main");
        console.log("Logged in");
      })
      .catch((err) => {
        toast({
          title: "ورود ناموفق",
          description: "اطلاعات اشتباه است.",
          position: "bottom-right",
          status: "error",
          duration: 9000,
          isClosable: true,
          containerStyle: {
            direction: "rtl",
          },
        });
        console.log(err);
      });
  }

  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Flex
      maxW={{ base: "100%", md: "max-content" }}
      w="100%"
      mx={{ base: "auto", lg: "0px" }}
      me="auto"
      h="100%"
      alignItems="start"
      justifyContent="center"
      mb={{ base: "30px", md: "60px" }}
      px={{ base: "25px", md: "0px" }}
      mt={{ base: "40px", md: "14vh" }}
      dir="rtl"
      flexDirection="column"
    >
      <Box me="auto">
        <Heading
          color={textColor}
          fontFamily="MyShFont"
          fontSize="36px"
          mb="10px"
        >
          {"ورود به حساب کاربری"}
        </Heading>
        <Text
          mb="36px"
          ms="4px"
          color={textColorSecondary}
          fontWeight="400"
          fontSize="md"
        >
          {"لطفا ایمیل و رمزعبور خود را در زیر وارد نمایید:"}
        </Text>
      </Box>
      <Flex
        zIndex="2"
        direction="column"
        w={{ base: "100%", md: "420px" }}
        maxW="100%"
        background="transparent"
        borderRadius="15px"
        mx={{ base: "auto", lg: "unset" }}
        me="auto"
        mb={{ base: "20px", md: "auto" }}
      >
        <FormControl>
          <FormLabel
            display="flex"
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            mb="8px"
          >
            {"نام کاربری"}
            <Text color={brandStars}>*</Text>
          </FormLabel>
          <Input
            isRequired={true}
            onChange={(e) => setUsername(e.target.value)}
            variant="auth"
            fontSize="sm"
            ms={{ base: "0px", md: "0px" }}
            type="username"
            placeholder="نام کاربری"
            mb="24px"
            fontWeight="500"
            size="lg"
          />
          <FormLabel
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            display="flex"
          >
            {"رمزعبور"}
            <Text color={brandStars}>*</Text>
          </FormLabel>
          <InputGroup size="md">
            <Input
              isRequired={true}
              onChange={(e) => setPassword(e.target.value)}
              fontSize="sm"
              placeholder="حداقل ۸ کاراکتر"
              mb="24px"
              size="lg"
              type={show ? "text" : "password"}
              variant="auth"
            />
            <InputLeftElement display="flex" alignItems="center" mt="4px">
              <Icon
                color={textColorSecondary}
                _hover={{ cursor: "pointer" }}
                as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                onClick={handleClick}
              />
            </InputLeftElement>
          </InputGroup>
          <Flex justifyContent="space-between" align="center" mb="24px">
            <FormControl display="flex" alignItems="center">
              <Checkbox
                id="remember-login"
                colorScheme="brandScheme"
                me="10px"
              />
              <FormLabel
                htmlFor="remember-login"
                mb="0"
                fontWeight="normal"
                color={textColor}
                fontSize="sm"
              >
                مرا به خاطر بسپار
              </FormLabel>
            </FormControl>
            <NavLink to="/forgot-password">
              <Text
                color={textColorBrand}
                fontSize="sm"
                w="124px"
                fontWeight="500"
              >
                فراموشی رمزعبور
              </Text>
            </NavLink>
          </Flex>
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            w="100%"
            h="50"
            mb="24px"
            onClick={() => login()}
          >
            ورود
          </Button>
        </FormControl>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="start"
          maxW="100%"
          mt="0px"
        >
          <Text color={textColorDetails} fontWeight="400" fontSize="14px">
            هنوز ثبت نام نکرده اید؟
            <NavLink to="/register">
              <Text color={textColorBrand} as="span" ms="5px" fontWeight="500">
                ساخت حساب
              </Text>
            </NavLink>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignIn;
