import { Box, Stack } from '@chakra-ui/react'
import * as React from 'react'
import Copyright from '@/components/Copyright'

const Footer = () => (
  <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between" />
      <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
    </Stack>
  </Box>
)

export default Footer
