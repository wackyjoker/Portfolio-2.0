import NextLink from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 28px;
  white-space:nowrap;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`
const LogoAnchor = styled.a`
  display:flex;
  cursor:pointer;
`

const Logo = () => {
  const footPrintImg = `/images/claw${useColorModeValue('', '-dark')}.svg`

  return (
    <NextLink href="/">
      <LogoAnchor>
        <LogoBox>
          <Image src={footPrintImg} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Kevin Young
          </Text>
        </LogoBox>
      </LogoAnchor>
    </NextLink>
  )
}

export default Logo
