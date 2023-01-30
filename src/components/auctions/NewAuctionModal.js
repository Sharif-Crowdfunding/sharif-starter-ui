import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent, ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import React from "react";
import AuctionForm from "./NewAuctionForm";

export default function NewAuctionModal({onSubmit,symbol}) {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        colorScheme={"teal"}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        حراج
      </Button>
      <Modal isCentered isOpen={isOpen} size={"3xl"} onClose={onClose}>
        {overlay}
        <ModalContent dir="rtl">
          <ModalHeader>ساخت حراج</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AuctionForm
            symbol={symbol}
              onSubmit={(e) => {
                onSubmit(e);
                onClose();
              }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
