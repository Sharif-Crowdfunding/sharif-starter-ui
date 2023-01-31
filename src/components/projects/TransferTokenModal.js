import {
  Box,
  Button,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function TransferToken({ onSubmit, symbol }) {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const [state, setState] = useState({
    symbol: symbol,
  });
  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
        mx="5px"
      >
        انتقال
      </Button>
      <Modal isCentered isOpen={isOpen} size={"xl"} onClose={onClose}>
        {overlay}
        <ModalContent dir="rtl">
          <ModalHeader>انتقال توکن {symbol}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TransferForm state={state} setState={setState} />
          </ModalBody>
          <ModalFooter>
            <Button
              w="7rem"
              colorScheme="red"
              variant="solid"
              onClick={() => {
                onSubmit(state);
              }}
            >
              ثبت
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const TransferForm = ({ state, setState }) => {
  return (
    <Box>
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
            تعداد توکن
          </FormLabel>
          <InputGroup size="sm" my={"5px"}>
            <Input
              mx={"5px"}
              type="number"
              focusBorderColor="brand.400"
              rounded="md"
              onChange={(e) =>
                setState({
                  ...state,
                  token_num: e.target.value,
                })
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
            نام کاربری گیرنده
          </FormLabel>
          <InputGroup size="sm" my={"5px"}>
            <Input
              mx={"5px"}
              type="text"
              focusBorderColor="brand.400"
              rounded="md"
              onChange={(e) =>
                setState({
                  ...state,
                  username: e.target.value,
                })
              }
            />
          </InputGroup>
        </FormControl>
      </SimpleGrid>
    </Box>
  );
};
