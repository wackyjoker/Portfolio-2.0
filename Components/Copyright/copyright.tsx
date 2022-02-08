import { Text, TextProps } from '@chakra-ui/react'

const Copyright = (props: TextProps) => (
  <Text fontSize="sm" {...props}>
    &copy;
    {' '}
    {new Date().getFullYear()}
    {' '}
    Kevin Young, Inc. All rights reserved.
  </Text>
)

export default Copyright
