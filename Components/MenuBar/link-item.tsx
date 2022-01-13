import { FC } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import {
  Link, useColorModeValue, LinkProps,
  useColorMode,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ILinkItem } from './types'
import styles from './link-item.module.scss'

type NextAndChakraProps = NextLinkProps & LinkProps & ILinkItem

const LinkItem:FC<NextAndChakraProps> = ({
  href, _target, children, ...props
}) => {
  const { colorMode } = useColorMode()
  const linkColor = useColorModeValue('gray.700', 'whiteAlpha.900')
  const linkHoverColor = useColorModeValue('pink.400', 'red.200')
  const isActive = useRouter().pathname === href
  return (
    <NextLink href={href} passHref>
      <Link
        className={isActive ? styles[`link-${colorMode}`] : undefined}
        p={2}
        color={linkColor}
        _hover={{ color: linkHoverColor }}
        borderColor={linkHoverColor}
        fontWeight={isActive ? 'bold' : undefined}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

export default LinkItem
