import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Project.css'
import projects from '../Media/data/data'
// import sol from '../Media/projects/sol.svg'

const workAnimate = {
    slideOut: {x: -250, opacity: 0},
    slideIn: {x: 0, opacity:1},
    transition: {delay:0.5, duration:1.5}
}

const Project = () => {
    const [works, setWorks] = useState(projects);
    console.log(setWorks)
  return (
    <div
    >
        {
            works.map((work) => (
                <motion.div 
                    initial={'slideOut'}
                    whileInView={'slideIn'}
                    viewport={{once: false, amount: 0.31}}
                    transition={{staggerChildren: 2.5, duration: 2.5, delay: 0.5}}
                className='wrap_p'>
                    <h1>{work.id}'</h1>
                <motion.div 
                    variants={workAnimate}
                className="single_project">
                <div className="project_item">
                    <div className="p_item">
                        <motion.img 
                            initial={{opacity: 0, x: -50}}
                            whileInView={{rotate: [0,0.1,0], opacity: 1, x: 0}}
                            transition={{delay:0.1, duration: 1.5,
                            type: 'spring',
                            bounce: 0.4
                        }}
                        src={work.image} alt="" />
                    </div>
                    <div className="p_item">
                        <h4>Featured Project</h4>
                        <h2>{work.title}</h2>
                        <p>{work.desc}</p>
                        <div className="button_wrap">
                            <button>
                                <a href={work.live}>Visit Website</a>
                            </button>
                            <button>
                                View Source
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
            </motion.div>
            )
        )}
        </div>
  )
}

export default Project