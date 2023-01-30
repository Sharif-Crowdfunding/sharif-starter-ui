import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import MultiStep from "./NewProjectForm";

export default function NewProjectModal({onSubmit}) {
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
        minH={"80px"}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        ساخت پروژه جدید
      </Button>
      <Modal isCentered isOpen={isOpen} size={"3xl"} onClose={onClose}>
        {overlay}
        <ModalContent dir="rtl">
          <ModalHeader>ساخت پروژه</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MultiStep
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
