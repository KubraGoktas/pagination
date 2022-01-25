import React from 'react'
import { Button } from 'reactstrap'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return( 
  <div className={styles.test}>Example Component: {text}
  <Button>Deneme</Button>
  </div>
  )
}
