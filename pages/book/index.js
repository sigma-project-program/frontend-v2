import { 
    Heading, 
    Center, Flex, Spacer, Stack, Text,Button, Box, Divider, HStack,
    IconButton, useColorMode, useColorModeValue
} from '@chakra-ui/react'

import getAllBooks from '../../lib/getAllBooks'
import { nanoid } from 'nanoid'
import { FaPencilAlt } from 'react-icons/fa'


// import {BsArrowRight} from 'react-icons/bs';
import {ArrowForwardIcon} from '@chakra-ui/icons'

import Link from 'next/link'
import Layout from '../../components/Layout';

export async function getServerSideProps(context) {
    // console.log(`Context id is: ${context.params.id}`)
    let res = await getAllBooks()
    console.log(`res received by [id]: ${JSON.stringify(res)}`)
    if (! res.found) {
        return {
            notFound: true
        }
    }
    console.log("res: ", res)

    return {
      props: {
          data: res.bookList
      }, // will be passed to the page component as props
    }
}// <
const BooksHome = ({ data }) => {
    console.log("books in BooksHome!") 
    console.log(data)
    // const { colorMode } = useColorMode()
    const arrowColorScheme = useColorModeValue('gray.100', 'gray.700')
    console.log(arrowColorScheme)
    return (
        <Layout>
        <Stack>
            <Center mt={5}>
                <Heading as='h1' size='3xl'>Books Home</Heading>
            </Center>
            
            <Center >
            <Flex gap='1rem' minW='60%' maxW='70%' mt={4} px={32} direction='column' align={'stretch'}>
            {data.map(book => {
                return(
                    <Box py={3} pl={7} pr={10} minW='full' 
                    maxW='full' grow={1} as='div' h='13%' border='1px' 
                    key={nanoid()} borderRadius='md' borderStyle={'solid'}  >
                        <Flex>
                        <Heading as='h3' size='md' isTruncated>{book.name}</Heading>
                        <Spacer />
                        <Link href={`/book/${book.id}`} >
                            <a>
                            <IconButton
                                colorScheme=  'teal'
                                // bg='teal'
                                isRound='true'
                                aria-label={`Open page for the ${book.name} book`}
                                size='md'
                                alignSelf='flex-end'
                                icon={<ArrowForwardIcon />}
                                />
                            </a>
                        </Link>
                        </Flex>
                        
                        {/* <Divider /> */}
                    </Box>
                )
            })}
            </Flex>
            </Center>
            <Center>
                <Button mt={10} maxW='30%' rightIcon={<FaPencilAlt />} colorScheme='blue' variant='outline'>
                    <Link href='/book/create'>
                        <a>Submit a Book</a>
                    </Link>
                </Button>
            </Center>
        </Stack>
        </Layout>
    )
    
}
export default BooksHome