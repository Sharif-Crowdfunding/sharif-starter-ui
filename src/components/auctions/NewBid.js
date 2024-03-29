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
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function NewBid({ onSubmit,id  }) {
  const [state, setState] = useState({
    id:id,
    token_num: 1,
    total_val: 0,
  });

  return (
    <Box px="10%" py="4%">
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
            تعدادتوکن خرید
          </FormLabel>
          <InputGroup size="sm">
            <Input
              type="number"
              placeholder="تعدادتوکن برای خرید را وارد کنید..."
              focusBorderColor="brand.400"
              rounded="md"
                onChange={(e) =>
                  setState({ ...state, token_num: parseInt(e.target.value) })
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
            ارزش هر توکن (بر اساس ریال)
          </FormLabel>
          <InputGroup size="sm">
            <Input
              type="number"
              placeholder="ارزش برای نماد خود را وارد کنید..."
              focusBorderColor="brand.400"
              rounded="md"
                onChange={(e) =>
                  setState({
                    ...state,
                    total_val: parseInt(e.target.value)*state.token_num* Math.pow(10, 15),
                })}
            />
          </InputGroup>{" "}
          <FormHelperText>
            {parseFloat(state.total_val) / 10 ** 18} اتریوم
          </FormHelperText>
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
           ارزش کل پیشنهاد
          </FormLabel>
          <InputGroup size="sm">
            <Input
            disabled="disabled"
            value={state.total_val/ Math.pow(10, 15)}
              type="number"
              focusBorderColor="brand.400"
              rounded="md"
              
            />
          </InputGroup>{" "}
          <FormHelperText>
            {parseFloat(state.total_val) / 10 ** 18} اتریوم
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
      <Button
        variant="darkBrand"
        color="white"
        fontSize="sm"
        fontWeight="500"
        borderRadius="70px"
        w={'40%'}
        px="24px"
        py="5px"
        mt={'20px'}
        onClick={()=>onSubmit(state)}
      >
        <Text>ثبت پیشنهاد</Text>
      </Button>
    </Box>
  );
}
