import React from 'react'
import styled from '@emotion/styled'

const Balls = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .ball {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background:  #FC8181 ;
    margin: 0 6px 0 0;
    animation: oscillate 0.7s ease-in forwards infinite;
  }

  .one {
    animation-delay: 0.5s;
  }
  .two {
    animation-delay: 1s;
  }
  .three {
    animation-delay: 2s;
  }

  @keyframes oscillate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`
const Screen = styled.div`
height:100vh;
width:100%;
position:relative;
padding:1em;
background:#2D3748;
`

// eslint-disable-next-line import/prefer-default-export
export const FirstLoader:React.FC = () => (
  <Screen>
    <Balls>
      <div className="ball one" />
      <div className="ball two" />
      <div className="ball three" />
    </Balls>
  </Screen>
)
