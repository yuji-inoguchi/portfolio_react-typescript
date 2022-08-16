import { memo } from "react";
import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";


export const Header = memo(() => {
    return(    
    <>
    <Flex
        as="nav"
        // bg="teal.500"
        bg="#ECECE7"
        // bgGradient='linear(to-b, blackAlpha.100, blackAlpha.200)'
        // color="gray.50"
        color="gray.700"
        align="center"
        justifyContent="space-between"
        padding={{ base: 3, md: 5 }}
    >
        <Flex
          as="a"
          me={8}
          align="center"
          _hover={{ cursor: "pointer" }}
        >
            {/* <Heading fontSize='3xl'>Portfolio</Heading> */}
            <Image className="header-icon" maxW={10} src={`${process.env.PUBLIC_URL}/img/illab-logo.png`}></Image>
        </Flex>
        <Flex
          align="rifht"
          fontSize="sm"
          flexGrow={2}
          justifyContent= "start"
          display={{ base: "none", md: "flex" }}
        >
            {/* <Box pr={4}>
                <Link fontSize={"lg"}>Work</Link>
            </Box>
            <Box pr={4}>
                <Link fontSize={"lg"}>About</Link>
            </Box> */}
        </Flex>
    </Flex>
    </>
    )
})