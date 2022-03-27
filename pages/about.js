
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
// import Logo from '../public/logo'
import { Stack, HStack, VStack, Heading, Container, IconButton, Text, Center, Icon} from '@chakra-ui/react'

const Landingpage = () => {
  return (
    <VStack px={20} pt={5}>
 <div className={styles.container}>
 <Head>
        <title>Create Next App</title>
        <meta name="description" content="" />
        {/* <link rel="icon" href={logo} /> */}
      </Head> 
      <Heading size='xl'>Project Motivation</Heading>
      
<Text mt={4} fontSize={'lg'}>
      During our time at the University of Waterloo, our main source of learning was through the books/lecture notes for our courses. We encountered slight errors or typos on the course material, a number of times and tried contacting the instructors about it on Piazza. But most of the time, professors weren’t able to get to our posts and some of the required corrections were never made during our term, instead, a PDF of corrections was maintained. It was inconvenient to refer to those notes every now and then. While the instructors were always on the lookout for typos and errors in the course material and lecture notes, the instructors were unable to manage them all because there were no convenient means for reporting errors. 

An error in the reading material, however slight it might be, can cause huge problems -  confusion, frustration and incomplete understanding. In the worst-case scenario, it might also leave gaps in the mind of readers. However, this was never the intent of the writer and most of them are very receptive to requests to correct these typos, but currently, there are no convenient means for people to report them. 

While services like scale online peer-review of materials exist, it is mostly for scientific texts and serves no purpose to the vast majority of the audience, who won’t be peers. Also, these services aren’t exactly similar to Errata management. 
        
</Text>
      

          


    </div>


    </VStack>
   


  )
}

export default function() {
  return(
    <Layout>
    <Landingpage></Landingpage>
  </Layout>
  )
  
}