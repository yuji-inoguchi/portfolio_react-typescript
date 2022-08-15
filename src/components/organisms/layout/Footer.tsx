import { memo } from "react";
import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";


export const Footer = memo(() => {
    return(    
    <>
    {/* <Image mt={-100} src={`${process.env.PUBLIC_URL}/img/wave-footer.svg`}></Image> */}
    <Flex
        as="nav"
        // bg="teal.500"
        bg="#ECECE7"
        // bgGradient='linear(to-b, blackAlpha.100, blackAlpha.200)'
        // color="gray.50"
        color="gray.700"
        align="center"
        justifyContent="flex-end"
        padding={{ base: 3, md: 5 }}
    >
        
        <Flex
          as="a"
          me={8}
          align="center"
          justify={"flex-end"}
          _hover={{ cursor: "pointer" }}
        >
            {/* <Heading fontSize='3xl'>Portfolio</Heading> */}
            <Image className="header-icon" maxW={10} src={`${process.env.PUBLIC_URL}/img/illab-logo.png`}></Image>
        </Flex>
    </Flex>
    </>
    )
})