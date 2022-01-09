import React from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons'
import {
  Link,
  useDisclosure,
} from '@chakra-ui/react'

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'About', icon: FiTrendingUp },

]
const Sidebar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (

    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
    </Box>
  )
}

export default Sidebar
