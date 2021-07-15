import React from 'react'
import Link from 'next/link'
import styles from '../styles/Button.module.css'

const Button = ({ name, to, margin }) => {
    return (
        <>
            <Link href={to} passHref>
                <button 
                // className={styles.enyButton}
                className={` ${styles.enyButton} 
                ${!margin ? " " : styles.navBtn} transition delay-100 duration-300 ease-in-out`}
                >
                    {name}
                </button>
            </Link>
        </>
    );
}

export default Button
