import React from 'react'
import './Connect.css'
import { motion } from 'framer-motion'
import PryBtn from '../Extras/Button'
import connect from '../Media/connect.svg'

const imageVariant = {
    zoom: {
      scale: 1.1,
      transition: {
        repeat: Infinity,
        duration:4.5
      },
    },
  };

const Connect = () => {
  return (
    <div>
        <div className="connect_flex" id='connect' smooth>
            <div className="connect_item">
                <h2 className='page_title'>
                    Convinced? <span>Get In Touch</span>
                </h2>
                <p>Thanks for stopping by, I’m currently looking to join a new team of developers, start-up or a Company. Also open to freelance roles. If you think we might be a good fit for one another, click the button below to get through to me. I look forward to hearing from you !</p>
                <PryBtn tag='Contact Me' link='mailto:onabulefemi@gmail.com' />
            </div>
            <div className="connect_item">
                <motion.img 
                    whileInView="zoom"
                    variants={imageVariant}
                src={connect} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Connect