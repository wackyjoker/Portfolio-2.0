import { FC } from 'react'
import styled from '@emotion/styled'
import { useColorModeValue } from '@chakra-ui/react'
import MainContainer from '@/layouts/MainContainer'

const Animation = styled.div<{ theme: string }>`
    background:${(props) => props.theme};
`

const Works: FC = () => {
  const colors = useColorModeValue('#ED64A6', '#FC8181')
  return (
    <MainContainer>
      <Animation theme={colors}>
        <h1>nothing goes here yet</h1>
      </Animation>
    </MainContainer>
  )
}

export default Works
