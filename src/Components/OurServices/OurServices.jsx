import React, { useEffect, useRef } from 'react'
import ServiceHome from '../ServiceHome/ServiceHome'
import translate from './../../assets/translate.png'
import learnar from './../../assets/learnar.png'
import voiceover from './../../assets/voiceover.png'
import website from './../../assets/website.png'
import news from './../../assets/news.png'
import tech from './../../assets/tech.png'
import tourplan from './../../assets/tourplan.png'
import acadimic from './../../assets/acadimic.png'
import cultur from './../../assets/cultur.png'
import business from './../../assets/business.png'
import exportImage from './../../assets/export.png'
import dtb from './../../assets/DTB.png'
import './OurServices.css'
import { motion, useInView, useAnimation } from "framer-motion"
function OurServices() {
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
    const services = {
        one: 'Translation and Proofreading',
        tow: 'Teaching Arabic and Japanese ',
        three: ' Voice Recording and Transcription',
        four: 'Adding Languages to Websites',
        fife: 'Desktop Publishing (DTP)',
        six: ' Planning and Preparing News Reports',
        seven: ' Design and Programming',
        eghit: 'Planning and Preparing Touristic Tours',
        nine: 'Academic and Cultural Consultations',
        ten: 'Support for Scientific and Cultural',
        eleven: 'Investment and Business Consultations',
        twilve: 'Importing and exporting various types of products',
    }
    return (
        <div className='services'>
            <div className="title-service">
                <motion.h1 
                    ref={ref2}
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 1 }}>

                    OUR SERVICES
                </motion.h1>
            </div>
            <div className="services-container">
                <div className="row ">
                    <motion.div
                        ref={ref}
                        variants={{
                            hidden: { opacity: 0.2, x: -100 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 1.5, delay: 0.25 }}
                        className="col-6 left-container">
                        <motion.div >
                            <ServiceHome left={true} image={translate} details={services.one} />
                        </motion.div>

                        <ServiceHome left={true} image={voiceover} details={services.three} />
                        <ServiceHome left={true} image={dtb} details={services.fife} />
                        <ServiceHome left={true} image={tech} details={services.seven} />
                        <ServiceHome left={true} image={acadimic} details={services.nine} />
                        <ServiceHome left={true} image={business} details={services.eleven} />
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden2: { opacity: 0.5, x: 100 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden2"
                        animate={mainControls}
                        transition={{ duration: 1.5, delay: 0.25 }}
                        className="col-6 right-container"     >
                        <ServiceHome left={false} image={learnar} details={services.tow} />
                        <ServiceHome left={false} image={website} details={services.four} />
                        <ServiceHome left={false} image={news} details={services.six} />
                        <ServiceHome left={false} image={tourplan} details={services.eghit} />
                        <ServiceHome left={false} image={cultur} details={services.ten} />
                        <ServiceHome left={false} image={exportImage} details={services.twilve} />
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default OurServices