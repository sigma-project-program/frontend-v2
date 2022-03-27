import { Heading, Box, Flex, useColorMode, useColorModeValue,IconButton, HStack, VStack,
    Stack, Center} from '@chakra-ui/react'
import Head from 'next/head';
import { FaSun, FaMoon } from 'react-icons/fa';
import Link from 'next/link'
// import {useState,useEffect} from 'react'

const Layout = ({children}) => {
    const { colorMode, toggleColorMode } = useColorMode();
    return(
        <Stack>
             {/* <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}> */}
             <Flex 
             bg={useColorModeValue('gray.50', 'gray.900')} 
             alignItems={'center'} 
             justifyContent={'space-between'}
             h={20}
             px={10}
             > 
                <Center>
                    <Link href='/'>
                        <a><Heading size='2xl'>Errata</Heading></a>
                    </Link>
                </Center>
                <VStack>
                <IconButton
                icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                isRound='true'
                size='lg'
                alignSelf='flex-end'
                onClick={toggleColorMode}
                />
                </VStack>
             </Flex>
             {/* </Box> */}
             
            {/* <HStack mt={4} > */}
                
                {/* <Box size='2xl'>Errata</Box> */}
                
                
        
            {/* </HStack> */}
          
        
        {children}
        </Stack>
    )
}

export default Layout