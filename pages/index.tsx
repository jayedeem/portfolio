import { Box, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeroBottom from './components/HeroBelow'
import HeroTop from './components/HeroTop'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Head>
        <title>Drew Jason</title>
      </Head>
      <Box
        className={styles.container}
        align="center"
        justifyContent="center"
        flexDirection="column"
        // w="100vw"
        h="100vh"
        bgGradient={[
          'linear(to-tr, blue.300, red.400)',
          'linear(to-t, purple.800, cyan.500)',
          'linear(to-b, green.100)'
        ]}
      >
        <HeroTop />
        <Flex
          width="400px"
          align="center"
          justifyContent="space-around"
          flexDirection="row"
          marginTop="30px"
        >
          <HeroBottom />
        </Flex>
      </Box>
      <div className={styles.container}>
        <Text fontSize="5xl">ABOUT ME</Text>
        <Text noOfLines={[1, 2, 3, 4, 5, 6]}>
          Hi! I am Andrew Cacayuran, an aspiring full-stack developer based in
          Orange County,CA. I learned to code during the pandemic and never
          looked back. I decided to take what was a hobby and turn it into a
          career. I enrolled myself into a coding bootcamp called NuCamp in
          Irvine. The bootcamp itself made me realize that I can pursue a career
          into software engineering.
        </Text>
      </div>
      <div className={styles.container}>
        <h2>TECHNICAL SKILLS</h2>
        <p> JavaScript, TypeScript, Nextjs, Reactjs, Node.js </p>
      </div>
      <div className={styles.container}>
        <h2>PORTFOLIO</h2>
      </div>
      <div className={styles.container}>
        <h2>RESUME</h2>
      </div>
    </div>
  )
}
