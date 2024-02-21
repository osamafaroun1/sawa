import React, { useRef , useEffect} from 'react'
import './About.css'
import Transition from '../../Components/Transition/Transition';
import aboutimg from './../../assets/about.jpg'
import logo from './../../assets/Logo-sawa.png';
import FooterSawa from '../../Components/FooterSawa/FooterSawa';
import { motion, useInView , useAnimation} from 'framer-motion';
function About() {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (inview) {
      mainControls.start("visible")
    }
  }, [inview]);
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
      <div className='about-page'>
        <div className="bg-about"></div>
        <motion.div className="who-are-we">
          <div class="custom-shape-divider-top-1707034690">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
          </div>
          <motion.h1 className='quiz-title'
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1, x: [-1000, 0] }}
            transition={{ duration: 1.5 }}>Who We Are ?</motion.h1>
          <motion.h4
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1, x: [-1500, 0] }}
            transition={{ duration: 2, delay: 1 }}>
            We are a company based in Tokyo, Japan, and we strive to be a bridge connecting Japan to the Arab world. Through our diverse and varied services, we aim to eliminate linguistic, cultural, and even geographical obstacles, in order to bring Japan closer than ever before to the Arab world.
          </motion.h4>
          <div class="custom-shape-divider-bottom-1707035420">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
          </div>
        </motion.div>
        <div className="about-img">
          <img src={aboutimg} alt="about us image" />
        </div>
        <div className="vision">
          <motion.div className="our-vision"
            ref={ref}
            variants={{
              hidden: { opacity: 0},
              visible: { opacity: 1, y: [-400, 0] }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1 }}>
            <div className="vision-title">
              <h2>Our Vision</h2>
            </div>
            <div className="vision-text">
              <p>Japan is geographically distant from the Arab world,
                which has led to numerous obstacles hindering the development
                of relations between Japan and Arab countries. These barriers
                include linguistic and cultural challenges. However, in the
                era of globalization, the world has become a small village,
                making it easier to connect different parts and enhance
                cultural and commercial exchange among nations, If the
                desire for that exists within those countries and among
                their people. We at "SAWA GROUP" aspire to be the bridge
                that connects Japan to the Arab world, transcending
                geographical distance, linguistic and cultural barriers.
                Our goal is to bring Japan closer to the Arab world than
                ever before, with its culture, language, and products.</p>
            </div>
            <div className="logo-vision">
              <img src={logo} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
      <FooterSawa />
    </>
  )
}
export default About
// export default Transition(About);