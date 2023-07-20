import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
interface props{
    Comp: React.ComponentType
}

const Layout: React.FC<props> = ({ Comp }) => {
    return (
        <div>
            <Navbar />
            <Comp />
            <Footer />
        </div>
    )
}

export default Layout