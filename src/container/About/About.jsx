import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { images } from '../../constants'

const abouts = [
    {title: 'Android Development', description: 'I love Android', imgUrl: images.about01},
    {title: 'IT Support', description: 'Im passionate about developing and supporting IT systems ', imgUrl: images.about02},
    {title: 'Web Development', description: 'I love creating stunning and responsive websites', imgUrl: images.about03},
    {title: 'React', description: 'I am learning how to code in React', imgUrl: images.about04}
];

const About = () => {

    return (
        <>
            <h2 className="head-text">
                I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={about.imgUrl} alt={about.title} />
                        <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
                        <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default About;