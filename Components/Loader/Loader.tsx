import React from 'react'
import styles from './Loader.module.scss'

const Loader: React.FunctionComponent = () => (

  <div className={styles.loaderContainer}>
    <div className={styles.loader} />
    <p>Loading</p>
  </div>
)

export default Loader
