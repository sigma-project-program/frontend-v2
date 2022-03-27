
import {Center, Heading, VStack, useColorMode, IconButton} from '@chakra-ui/react'
import ErrorTable from '../components/ErrorTable'
import data from "../testData"
import { FaSun, FaMoon } from 'react-icons/fa';
import { nanoid } from 'nanoid'
// import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'



// data = JSON.parse(data)
const Homepage = ({loggedin,setLoggedin,userobj,setUserobj}) => {
  // const bookName = "Linear Algebra 1"
  // const errorList = data.map(error=> {
  //   console.log(error.name)
    
  // })
  const { colorMode, toggleColorMode } = useColorMode();
//   let navigate = useNavigate(); 

//   useEffect(()=>{
//     if(!loggedin){
//       navigate('/login')
//     }
//   },[])


  
  return (
    <VStack>
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound='true'
        size='lg'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />
      {data.map(dataObj => {
        return(
          <div key={nanoid()}>
            <Center w='100vw' mt={5}>
              <Heading fontSize='4xl'>{dataObj.bookName} Errata</Heading>
            </Center>
            <ErrorTable errorData={ dataObj }/>
          </div>)
    })}
   
    </VStack>
      
  )
 
 
  
}

// console.log(data[0]);
//   return (
//     <div>
//       <h1>{bookName} Errata</h1>
//       {errorList}
//     </div> );

//       // {/* ({data.map(error=> {
//       //   // console.log("data el put!");
//       //   console.log()
//       //   <div key={ () => nanoid()} >

//       //     <h2>name: {error.id}</h2>
//       //     <p>errorType: {error.errorType}</p>
//       //     <p>location: {error.location}</p>
//       //     <p>description: {error.description}</p>
//       //     <p>bookID: {error.bookID}</p>
//       //     <p>decision: {error.decision}</p>
//       //   </div>
//       // })}) */}
      
 
    
// }

// const Homepage = DataTable
export default Homepage