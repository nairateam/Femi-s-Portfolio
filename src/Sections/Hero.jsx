import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion'
import wave from '../Media/Icons/wave-hand.svg'
// import eclipse from '../Media/hero_eclipse.png'
import html from '../Media/Stacks/html.svg'
import css from '../Media/Stacks/css.svg'
import js from '../Media/Stacks/js.svg'
import vs from '../Media/Stacks/vs.svg'
import ts from '../Media/Stacks/ts.svg'
import react from '../Media/Stacks/react.svg'
import femi from '../Media/femi.webp'
import PryBtn from '../Extras/Button'
import TransBtn from '../Extras/TransBtn'


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

const Hero = () => {
  return (
    <>
    <div className='hero_section'>
        <div className="hero_flex">
            <div className="hero_item">
                <motion.h2
                    initial={{opacity:0, x:-80}}
                    animate={{opacity:1, x:0}}
                    transition={{delay:0.5, duration:1.5}}
                >Hi, I'm Oluwafemi <img src={wave} alt="Hello" />
                </motion.h2>
                <motion.h3
                    initial={{opacity:0, x:180}}
                    animate={{opacity:1, x:0}}
                    transition={{delay:0.5, duration:1}}
                >Frontend Developer</motion.h3>
                <motion.p
                    initial={{opacity:0, y:30}}
                    animate={{opacity:1, y:0}}
                    transition={{delay:0.8, duration:1}}
                >I am excited to bring my skills and experience to a company that values innovation and creativity. With a passion for building visually appealing and user-friendly websites, I am confident in my ability to turn complex project requirements into intuitive and functional designs.</motion.p>
                <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:1.5, duration:1}}
                className="button_wrap">
                    <TransBtn tag='View Resume' />
                    <PryBtn tag='Contact Me' link='mailto:onabulefemi@gmail.com' />
                </motion.div>
            </div>
            <div className="hero_item">
                <div className="hero_stacks">
                    <motion.img 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1.5, delay:0.5}}
                    src={femi} alt="Oluwafemi" className='femi_ban' />
                    <motion.div 
                        initial={'setOff'}
                        whileInView={'setIn'}
                        transition={{staggerChildren:0.2}}
                    className="stacks">
                        <motion.img 
                            variants={animateIcon}
                        src={html} alt="" />
                        <motion.img 
                            variants={animateIcon}
                        src={js} alt="" />
                        <motion.img 
                            variants={animateIcon}
                        src={react} alt="" />
                        <motion.img 
                            variants={animateIcon}
                        src={css} alt="" />
                        <motion.img 
                            variants={animateIcon}
                        src={ts} alt="" />
                        <motion.img 
                            variants={animateIcon}
                        src={vs} alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
        {/* <img src={eclipse} alt="Eclipse Background" className='hero_eclipse' /> */}
    </div>
    </>
  )
}

export default Hero