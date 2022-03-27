import getBookById from "../../lib/getBookById"
import { Center, Stack, Text , Button} from '@chakra-ui/react'
import ErrorTable from "../../components/ErrorTablev2"
import Layout from "../../components/Layout"
import { FaPencilAlt } from 'react-icons/fa'
import Link from 'next/link'

export async function getServerSideProps(context) {
    // console.log(`Context id is: ${context.params.id}`)
    let id = context.params.id
    let res = await getBookById(id)
    console.log(`res received by [id]: ${res}`)
    if (! res.found) {
        return {
            notFound: true
        }
    }

    return {
      props: {
          data: res
      }, // will be passed to the page component as props
    }
}// <p>Temp res is: {temp}</p>


const BookPage = ({ data  }) => {
    // let temp = JSON.stringify(tempRes)
    return(
        <Layout>
            <Stack mt={4}spacing={3}>
                <Center>
                <Text fontSize='4xl'>{data.name}</Text>
                </Center>
                
                <ErrorTable errorData={data.errors}></ErrorTable>
            </Stack>
            <Center>
                <Button maxW='30%' rightIcon={<FaPencilAlt />} colorScheme='blue' variant='outline'>
                    <Link href='/book/createError'>
                        <a>Submit an Error</a>
                    </Link>
                </Button>
            </Center>
        </Layout>
        )

    
}

export default BookPage