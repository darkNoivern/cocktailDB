import React from 'react'
import './style.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-brand py-3">
                        <span className='play-bold text-dark'>Macha</span> 
                        <span className='play-bold olive'> Cocktail </span>
                        🍹
                    </div>
                </div>
            </nav>   
        </>
    )
}

export default Navbar
