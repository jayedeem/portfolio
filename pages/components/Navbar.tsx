import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Link from 'next/link'
const MenuItems = ({ children, isLast, to = '/', ...rest }) => (
  <Text
    mb={{ base: isLast ? 0 : 8, sm: 0 }}
    mr={{ base: 0, sm: isLast ? 0 : 8 }}
    display="block"
    color="white"
    {...rest}
  >
    <Link href={to}>{children}</Link>
  </Text>
)

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Navbar = (props) => {
  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg="black"
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      <Flex align="center">AC</Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? 'x' : 'o'}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems href="/">Home</MenuItems>
          <MenuItems href="/how">How It works </MenuItems>
          <MenuItems href="/faetures">Features </MenuItems>
          <MenuItems href="/pricing">Pricing </MenuItems>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Navbar
