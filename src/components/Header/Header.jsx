import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import './Header.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const fullname = useSelector((state)=>state.fullname)
    
    return (
        <div>
            <Navbar />
            <header className={`header position-relative ${fullname ? 'header-compact' : 'header-full'}`}>
            
            {/* Hero section - shows different content based on login status */}
            <div className='hero container d-flex flex-column align-items-center justify-content-center'>
                <div className="header-content d-flex flex-column align-items-center justify-content-center">
                    
                    {fullname ? (
                        // Compact version for logged-in users
                        <>
                            <h2 className='welcome-text'>
                                Welcome back, <span className="highlight-name">{fullname}</span>!
                            </h2>
                            <p className='text-center text-muted mb-4'>
                                Continue exploring the blog
                            </p>
                            <div className='d-flex gap-3'>
                                {/* <Link to={'/dashboard'} className='btn btn-primary btn-sm'>
                                    Dashboard
                                </Link> */}
                                <Link to={'/posts'} className='btn btn-outline-light btn-sm'>
                                    Browse Posts
                                </Link>
    
                            </div>
                        </>
                    ) : (
                        // Full version for non-logged-in users
                        <>
                            <h1 className=''>Thank you for joining</h1>
                            <h1>Welcome to Iyiola's Dev Blog</h1>
                            <h3 className='text-center'>
                                A personal blog sharing my journey in learning React, Node.js, and web development.
                            </h3>
                            <div className='d-flex gap-3 mt-3'>
                                <Link to={'/login'} className='btn btn-primary'>
                                    Get Started
                                </Link>
                                <Link to={'/blog'} className='btn btn-outline-light'>
                                    Read Articles
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
        </div>
        
    )
}

export default Header