import { Flex, Text, Box } from '@chakra-ui/react'
import { NextComponentType } from 'next'
import Link from 'next/link'
import React from 'react'

const HeroTop: NextComponentType = () => {
  return (
    <>
      <Text color="white" fontSize="4xl">
        Hello! My Name is
      </Text>
      <Text color="purple.100" fontSize="8xl">
        Andrew Cacayuran.
      </Text>
      <Text color="white" fontSize="3xl">
        I am a Full Stack Web Developer
      </Text>
    </>
  )
}

export default HeroTop
