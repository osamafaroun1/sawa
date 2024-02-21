import React,{useRef,useEffect} from 'react'
import './OneService.css'
import img from './../../assets/translate-one.jpg'
import { motion, useInView, useAnimation } from "framer-motion"
function OneService({position ,marginLeft ,image,title, text}) {
    const ref = useRef(null);
    const inview = useInView(ref, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (inview) {
            mainControls.start("visible")
        }
    }, [inview]);
if (position === "left")
    return (
        <motion.div className=  'one-service'
        ref={ref}
        variants={{
            hidden: { opacity: 0,x: -300 },
            visible: { opacity: 1, x:  0 }
        }}
        initial="hidden"
        animate={mainControls}
        // transition={{ duration: 3.5, delay: 0 }}
        
        >
            <div className="one-service-img">
                <img src={image} alt="service image" />
            </div>
            <div className="one-service-title">
                <h4>{title}</h4>
            </div>
            <div className="one-service-text">
                {text}
            </div>
        </motion.div>
      )
else if(position=== "center")
return (
    <motion.div className='one-service'
    ref={ref}
    variants={{
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0 }
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ duration: 1, delay: 0 }}
    
    >
        <div className="one-service-img">
            <img src={image} alt="service image" />
        </div>
        <div className="one-service-title">
            <h4>{title}</h4>
        </div>
        <div className="one-service-text">
            {text}
        </div>
    </motion.div>
  )
  else{
    return (
        <motion.div className='one-service'
        ref={ref}
        variants={{
            hidden: { opacity: 0, x: 300 },
            visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        // transition={{ duration: 0.5, delay: 0 }}
        
        >
            <div className="one-service-img">
                <img src={image} alt="service image" />
            </div>
            <div className="one-service-title">
                <h4>{title}</h4>
            </div>
            <div className="one-service-text">
                {text}
            </div>
        </motion.div>
      )
  }
}

export default OneService