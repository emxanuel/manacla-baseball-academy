import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../css/layout.module.css'
interface props{
    Comp: React.ComponentType
}

const Layout: React.FC<props> = ({ Comp }) => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Comp />
            <Footer />
        </div>
    )
}

export default Layout