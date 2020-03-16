import React from 'react'
import classes from './Button.module.css'

export const Button = ({ onClick, children, type }) => {
  const styles = [classes.button]
  switch (type) {
    case 'primary':
      styles.push(classes.green)
      break
    case 'secondary':
      styles.push(classes.blue)
      break
    default:
      break
  }
  return (
    <div className={classes.buttonWrapper}>
      <button onClick={onClick} className={styles.join(' ')}>
        {children}
      </button>
    </div>
  )
}

Button.defaultProps = {
  type: 'primary'
}