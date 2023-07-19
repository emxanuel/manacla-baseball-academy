import React from 'react'
import Navbar from './Navbar'
interface props{
    Comp: React.ComponentType
}

const Layout: React.FC<props> = ({ Comp }) => {
    return (
        <div>
            <Navbar />
            <Comp />
        </div>
    )
}

export default Layout