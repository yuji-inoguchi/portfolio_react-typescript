import { Box, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"

import { Home } from "../../pages/Home";
import { Details } from "../../organisms/Contents/Details";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    modal: string;
    title: string;
};

export const DetailModal: React.FC<Props> = ((props) => {
    const { isOpen, onClose, modal, title } = props;
    return(
    <>
        <Modal isOpen={isOpen} onClose={onClose} size={'6xl'}>
            <ModalOverlay>
                <ModalContent>
                    <ModalBody>
                        <Text py={5} textAlign={"center"}>{title}</Text>
                        <ModalCloseButton variant="unstyled"/>
                        <Image src={modal} alt="" />
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    </>
    )
})

