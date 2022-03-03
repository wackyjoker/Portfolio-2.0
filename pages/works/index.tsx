import { FC } from 'react'
// import styles from './Loader.module.scss'
import styled from '@emotion/styled'
import { useColorModeValue } from '@chakra-ui/react'

const Animation = styled.div<{ theme: string }>`
    background:${(props) => props.theme};
`

const Works: FC = () => {
  const colors = useColorModeValue('#ED64A6', '#FC8181')
  return (
    <Animation theme={colors}>
      <h1>nothing goes here yet</h1>
    </Animation>
  )
}

export default Works
