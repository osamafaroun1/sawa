import './Hero.css'
import logo from './../../assets/Logo-sawa.png';
import { motion } from 'framer-motion';
import {  Typewriter } from 'react-simple-typewriter'
function Hero() {
    
    return (
        <div className='hero'>
            
            <div className="name-company">
                <motion.h1
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1, x: [-1000, 0] }}
                    transition={{ duration: 1.5 }}
                >
                    <span className='strok'>SA</span><span className='first-word'>WA</span><br />
                    <span className='marg-left'>
                        <span className="strok">G</span><span className="second-word">ROUP</span>
                    </span>

                </motion.h1>
            </div>
            <div className="name-company-small">
                <motion.h1
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1, x: [-1000, 0] }}
                    transition={{ duration: 1.5 }}
                >
                    <span className='strok'><span className='fill' >SAWA</span></span><br />
                    <span className='marg-left'>
                        <span className="strok">GROUP</span>
                    </span>

                </motion.h1>
            </div>
            <motion.div className="logo-hero"
                    variants={{
                        hidden2: { opacity: 0, x: 100 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden2"
                    animate="visible"
                    transition={{ duration: 1.5, delay: 0.25}}>
                    <img src={logo} alt="logo" />
                </motion.div>
            <div className="aboutus-hero ">
                <div className="slogan">
                    <div className="back-slogan">
                        <Typewriter
                            words={['We Walk Together Towards A Better Future For All']}
                            loop={true}
                            typeSpeed={80}
                            delaySpeed={3500}
                            cursor
                        />
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Hero