import React,{useRef,useEffect} from 'react'
import './FooterSawa.css'
import logo from './../../assets/Logo-sawa.png';
import { motion, useInView, useAnimation } from "framer-motion"
function FooterSawa() {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const inview = useInView(ref, { once: true });
    const inview2 = useInView(ref, { tow: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (inview) {
            mainControls.start("visible")
        }
    }, [inview]);
    useEffect(() => {
        if (inview2) {
            mainControls.start("visible")
        }
    }, [inview2]);
    return (
        <div className='footer'>
            <div className="row">
                <div className="col-8">
                    <motion.div className="footer-text"
                        ref={ref}
                        variants={{
                            hidden: { opacity: 0.2, x: -100 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 1.5, delay: 0.25 }}
                        >
                        
                        <div className="location mb-2">
                            <p>
                                Our Location :            
                                <span> Terrace K&K 201, 2000-4 Higashinakano, Hachioji, Tokyo, Japan 192-0351</span>
                            </p>
                        </div>
                        <div className="email mb-2">
                            <p>
                                E-mail :<br />
                                <span> contact@sawagroup.jp</span>
                            </p>
                        </div>
                        <div className="tel">
                            <p>
                                Tel :<br />
                                <span> 050-6866-1791</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
                <motion.div className="col-4"
                    variants={{
                        hidden2: { opacity: 0, x: 100 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden2"
                    animate={mainControls}
                    transition={{ duration: 1.5, delay: 0.25}}>
                    <img src={logo} alt="logo" />
                </motion.div>
            </div>
            <motion.div className="copy-rights"
                variants={{
                    hidden2: { opacity: 0.2, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden2"
                animate={mainControls}
                transition={{ duration: 1, delay: 0.25 }}
            >
                <h3 className='text-center'>
                Copyright © 2022 SAWA GROUP LLC. All Rights Reserved
                </h3>
            </motion.div>
        </div>
    )
}

export default FooterSawa