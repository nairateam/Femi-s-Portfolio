import React, { useRef, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { Sling as Hamburger } from 'hamburger-react'
import './Nav.css'
import { motion } from 'framer-motion'
import logo from '../Media/logo.svg'
import github from '../Media/Icons/github.svg'
import linkedin from '../Media/Icons/linkedin.svg'
import twitter from '../Media/Icons/twitter.svg'
import instagram from '../Media/Icons/instagram.svg'

const variants = {
    open: { opacity: 1, y: 0, },
    closed: { opacity: 0, y: "-100%" },
    transition: {delay: 0.5, duration: 1}
  }  

  const logoLoop = {
    loop: {
      x: -100,
      transition: {
        repeat: Infinity,
        duration:20
      },
    },
  };

  const animateIcon = {
    setOff:{y:50},
    setIn:{y:0,
        rotate:[0,30,0],
        transition:{
        type:'spring',
        bounce:0.4,
        duration:.8
    }
}
}

const Nav = () => {

    const navRef = useRef();
    const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
    }

const [isOpen, setOpen] = useState(false)

  return (
    <div>
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
        
    </motion.nav>
        <nav className='nav__wrap'>
            <div className='logo_join'>
                <img src={logo} alt="Oluwafemi O." />
                <motion.h3
                    whileInView="loop"
                    variants={logoLoop}
                >Femi.dev</motion.h3>
            </div>
            <ul className='nav__list'>
                <motion.li 
                    initial={{y:-100}}
                    animate={{y:0}}
                    transition={{delay: 0.5}}
                className='nav__item'>
                    <Link 
                        to='/' 
                        className={({ isActive }) => "nav_link" + (isActive ? 'active' : "")}>
                        Meet Me
                    </Link>
                </motion.li>
                <motion.li 
                    initial={{y:-100}}
                    animate={{y:0}}
                    transition={{delay: 0.7}}
                className='nav__item'>
                    <Link 
                        to='#about' 
                        className={({ isActive }) => "nav_link" + (isActive ? 'active' : "")}>
                        About Me
                    </Link>
                </motion.li>
                <motion.li 
                    initial={{y:-100}}
                    animate={{y:0}}
                    transition={{delay: 0.9}}
                className='nav__item'>
                    <Link 
                        to='#portfolio' 
                        className={({ isActive }) => "nav_link" + (isActive ? 'active' : "")}>
                        Project
                    </Link>
                </motion.li>
                <motion.li 
                    initial={{y:-100}}
                    animate={{y:0}}
                    transition={{delay: 1.1}}
                className='nav__item'>
                    <Link 
                        to='#connect' 
                        className={({ isActive }) => "nav_link" + (isActive ? 'active' : "")}>
                        Contact Me
                    </Link>
                </motion.li>
            </ul>
            <div className="socials">
                <a href="https://github.com/nairateam"><img src={github} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/olamilekan-onabule-b60ba6201/"><img src={linkedin} alt="Linkedin" /></a>
                <a href="https://twitter.com/dev_femi"><img src={twitter} alt="Twitter" /></a>
                <a href="https://instagram.com/femi.dev"><img src={instagram} alt="Instagram" /></a>
            </div>
            <span onClick={showNavbar}><Hamburger 
            toggled={isOpen} toggle={setOpen} color="#006600" size=
            '25' /></span>
        </nav>
        <motion.div 
            initial={'closed'}
            whileInView={'open'}
            viewport={{once: false, amount: 0.1}}
            transition={{staggerChildren: 0.1}}
        className="menu_nav" ref={navRef}>
            <nav className='nav__wrap'>
            <span onClick={showNavbar}><Hamburger 
            toggled={isOpen} toggle={setOpen} color="#006600" size=
            '25' /></span>
            </nav>
                {/* <motion.p
                    variants={variants}
                >Gold</motion.p>
                <motion.p
                    variants={variants}
                >Gold</motion.p>
                <motion.p
                    variants={variants}
                >Gold</motion.p>
                <motion.p
                    variants={variants}
                >Gold</motion.p>
                <motion.p
                    variants={variants}
                >Gold</motion.p> */}
                <ul className='nav__menu__list'>
                <motion.li 
                    variants={variants}
                className='nav__menu__item'>
                    <Link 
                        to='/' 
                        onClick={showNavbar}
                        className={({ isActive }) => "nav_link" + (isActive ? 'active' : "")}>
                        Meet Me
                    </Link>
                </motion.li>
                <motion.li 
                    variants={variants}
                className='nav__menu__item'>
                    <Link 
                        to='#about' 
                        onClick={showNavbar}
                        className={({ isActive }) => "nav_link" + (isActive ? 'active' : "")}>
                        About Me
                    </Link>
                </motion.li>
                <motion.li 
                    variants={variants}
                className='nav__menu__item'>
                    <Link 
                        to='#portfolio' 
                        onClick={showNavbar}
                        className={({ isActive }) => "nav_link" + (isActive ? 'active' : "")}>
                        Project
                    </Link>
                </motion.li>
                <motion.li 
                    variants={variants}
                className='nav__menu__item'>
                    <Link 
                        to='#connect' 
                        onClick={showNavbar}
                        className={({ isActive }) => "nav_link" + (isActive ? 'active' : "")}>
                        Contact Me
                    </Link>
                </motion.li>
            </ul>
            <motion.div 
                initial={'setOff'}
                whileInView={'setIn'}
                transition={{staggerChildren:0.2}}
            className="menu__socials">
                {/* <motion.img 
                    variants={animateIcon}
                src={github} alt="Github" />
                <motion.img 
                    variants={animateIcon}
                src={linkedin} alt="Linkedin" />
                <motion.img 
                    variants={animateIcon}
                src={twitter} alt="Twitter" />
                <motion.img 
                    variants={animateIcon}
                src={instagram} alt="Instagram" /> */}
                <motion.a 
                    variants={animateIcon}
                href="https://github.com/nairateam" target="_blank"><img src={github} alt="Github" /></motion.a>
                <motion.a 
                    variants={animateIcon}
                href="https://www.linkedin.com/in/olamilekan-onabule-b60ba6201/" target="_blank"><img src={linkedin} alt="Linkedin" /></motion.a>
                <motion.a 
                    variants={animateIcon}
                href="https://twitter.com/dev_femi" target="_blank"><img src={twitter} alt="Twitter" /></motion.a>
                <motion.a 
                    variants={animateIcon}
                href="https://instagram.com/femi.dev" target="_blank"><img src={instagram} alt="Instagram" /></motion.a>
            </motion.div>
            <div className='mecu_connect'><p>Do you have an idea?</p>
            <p>+2348121538461</p>
            <a href='mailto:onabulefemi@gmail.com'>onabulefemi@gmail.com</a></div>
        </motion.div>
    </div>
  )
}

export default Nav