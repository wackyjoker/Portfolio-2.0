import {
  Container, Box, Flex, Menu, Stack, Heading, MenuItem,
  MenuList, Link,
  MenuButton, useColorModeValue, IconButton,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'
import { GoThreeBars } from 'react-icons/go'
import Logo from '@/components/Logo'
import LinkItem from '@/components/LinkItem'
import ThemeToggleButton from '@/components/ThemeToggleButton'

const Navbar = (props:any) => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="flex-start" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        {/* Desktop view */}
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          display={{ base: 'none', sm: 'flex' }}
          width={{ base: 'full', sm: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, sm: 0 }}
        >
          <LinkItem href="/" path={path} arial-label="Home">
            Home
          </LinkItem>
          <LinkItem href="/works" path={path} arial-label="Works">
            Works
          </LinkItem>
          <LinkItem href="/about" path={path} arial-label="About">
            About
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="https://github.com/wackyjoker/Portfolio-2.0"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>
        {/* Mobile view */}
        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', sm: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<GoThreeBars />}
                variant="outline"
                aria-label="Open Menu"
              />
              <MenuList>
                <NextLink href="/" passHref arial-label="Home">
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref arial-label="Work">
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/about" passHref arial-label="About">
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/wackyjoker/Portfolio-2.0"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
