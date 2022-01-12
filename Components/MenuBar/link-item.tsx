import { FC } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import {
  Link, useColorModeValue, LinkProps,
} from '@chakra-ui/react'
import { ILinkItem } from './types'

type ChakraAndNextProps = NextLinkProps & LinkProps & ILinkItem

const LinkItem:FC<ChakraAndNextProps> = ({
  href, path, _target, children, ...props
}) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

export default LinkItem
