import React from 'react'
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <p>
                    <span>React + TS Todo</span> @ 2024
                </p>
            </footer>
        </div>
    )
}
