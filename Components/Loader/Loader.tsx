import React from 'react'
import styles from './Loader.module.scss'

const Loader: React.FunctionComponent = () => (
  <>
    <div className={styles.loader} />
    <p>Loading</p>
  </>
)

export default Loader
