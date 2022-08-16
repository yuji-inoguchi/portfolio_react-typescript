import { Box, Image, Spacer, Stack, Text, useDisclosure, WrapItem } from "@chakra-ui/react"
import { Children, ReactNode } from "react";
import AnimationTrigger from "../../AnimationTrigger";
import { DetailModal } from "../../organisms/Modal/DetailModal";

type Props = {
    image: string;
    title: string;
    detail: string;
    modal: string;
  };

export const Details: React.VFC<Props> = (props) => {
    const { onOpen, isOpen, onClose } = useDisclosure();
    const { image, title, detail ,modal } = props;
    
    return (
    <>
    <WrapItem>
        {/* <AnimationTrigger animation="fadeIn" triggerOnce> */}
            <Box
            maxW={{ base: "100%", md: "sm" }}
            bg="white"
            borderRadius="10px"
            shadow="md"
            _hover={{ cursor: "pointer", opacity: "0.8" }}
            onClick={onOpen}
            overflow='hidden'
            justifyContent={"center"}
            m={5}
            // className="fadeIn"
            >
                <Image src={image}/>
                
                    <Text textAlign="center" fontSize="sm" mt='5' as='h2' noOfLines={1}>
                        {/* {title} */}
                        {/* - skill - */}
                    </Text>
                    <Text textAlign="center" fontSize="sm" mb='5' as='h2' noOfLines={1}>
                        {detail}
                    </Text>
                
                <DetailModal isOpen={isOpen} onClose={onClose} modal={modal} title={title}/>
            </Box>
        {/* </AnimationTrigger> */}
    </WrapItem> 
    </>
    )
}
