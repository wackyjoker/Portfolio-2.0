import { FC } from 'react'
import styled from '@emotion/styled'

// const Loader: React.FunctionComponent = () => (

//   <div className={styles.loaderContainer}>
//     <div className={styles.loader} />
//     <p>Loading...</p>
//   </div>
const Balls = styled.div<{ theme: string }>`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .ball {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background:  ${(props) => props.theme ?? '#ED64A6'} ;
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
`

type ILoader = {
  ballColor?: string
}

const Loader: FC<ILoader> = ({ ballColor = '#ED64A6' }) => (
  <Screen>
    <Balls theme={ballColor}>
      <div className="ball one" />
      <div className="ball two" />
      <div className="ball three" />
    </Balls>
  </Screen>
)

export default Loader
