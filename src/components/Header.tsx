import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div>
        <header className={styles.header}>
			<h1>React + TS Todo</h1>
		</header>
    </div>
  )
}
