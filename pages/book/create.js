import { 
    Heading, Stack, Input, Center, Button,
    FormControl, FormLabel, useToast
} from '@chakra-ui/react'
// import { ST } from 'next/dist/shared/lib/utils'
import Layout from '../../components/Layout'
import { useState } from 'react'
import createBook from '../../lib/createBook'

// const onSubmitHandler = async (e, bookName) =>{
//     e.preventDefault();
//     console.log("book Name is:", bookName)
//     let res = await createBook(bookName);
//     if(res.created) {
        
        
//     } else {
        
//     }

// } 

const BookCreate = (props) => {
    const onChangeWrapper = (e, func) => {
        func(e.target.value)

    }
    const toast = useToast()
    const [bookName, setBookName] = useState('')
    const [authorName, setAuthorName] = useState('')
    // const 
    return(
        <Layout>
            <Stack pl={32} >
                <Heading mt={5} as='h2' size='lg'>Create New Book</Heading>
                <Stack mt={10} ml={50} w='20rem' spacing={7}>
                    <FormControl isRequired>
                        <FormLabel>Book/Article Name</FormLabel>
                        <Input 
                            placeholder='Book Name' 
                            value={bookName} 
                            onChange={(e) => onChangeWrapper(e, setBookName)}
                        />
                    </FormControl>
                    
                    <FormControl isRequired>
                        <FormLabel>Author Name(s)</FormLabel>
                        <Input 
                            placeholder='Author Name' 
                            value={authorName} 
                            onChange={(e) => onChangeWrapper(e, setAuthorName)}
                         />
                    </FormControl>
                    {/* <p>{bookName}</p>
                    <p>{authorName}</p> */}
                    {/* <Input placeholder='ISBN' /> */}
                    <Button
                        mt={4}
                        colorScheme='teal'
                        isLoading={props.isSubmitting}
                        type='submit'
                        onClick={ async (e) => {
                            e.preventDefault()
                            let res = await createBook(bookName);
                            var title, status
                            if(res.created) {
                                title =  `Yipee! Pushed to DB`
                                status = 'success'
                            } else {
                                title = `An error occurred when adding Book to Database`
                                status = 'error'
                            }
                            toast({ title, status, isClosable: true, duration: 3000 })
                        }}
                    >
                        Submit
                    </Button>
                </Stack>
            </Stack>
        </Layout>
    )
}
export default BookCreate