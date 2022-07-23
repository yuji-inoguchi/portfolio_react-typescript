import { memo } from "react";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";


export const Header = memo(() => {
    return(    
    <>
    <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justifyContent="space-between"
        padding={{ base: 3, md: 5 }}
    >
        <Flex
          as="a"
          me={8}
          _hover={{ cursor: "pointer" }}
        >
            <Heading>ポートフォリオ</Heading>
        </Flex>
        <Flex
          align="rifht"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
            <Box pr={4}>
                <Link>About</Link>
            </Box>
        </Flex>
    </Flex>
    </>
    )
})