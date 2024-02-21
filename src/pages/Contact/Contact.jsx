import React, { useEffect, useRef, useState } from 'react'
import './Contact.css'
import Transition from '../../Components/Transition/Transition';
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';
import FooterSawa from '../../Components/FooterSawa/FooterSawa';
import logo from './../../assets/Logo-sawa.png';
function Contact() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');
  const formRef = useRef();
  function handleSubmit(e) {

    e.preventDefault();

    // from email js dashbord
    const serviceID = "service_85s40ik";
    const templetID = "template_orvs5sk";
    const publicKey = "rNwxZz52c718HEIDf";

    const templateParameters = {
      from_name: name,
      from_email: email,
      from_tel: number,
      to_name: "SawaGroup",
      message: message
    }
    //  console.log(templateParameters.from_name, templateParameters.message)
    emailjs.sendForm(serviceID, templetID, formRef.current, publicKey)
      .then((response) => {
        console.log("success", response.text);
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
      <div className='contact-page'>
        <div className="contact-compan-name">
          <motion.h1
            initial={{ opacity:0 , y : +80 }}
            animate={{ opacity: 1 , y : 0 }}
            transition={{duration : 1}}
            whileHover={{y : [-10 , 10, 0]}}
          >SAWA GROUP</motion.h1>
        </div>
        <h3 className='contact-title'>Please contact us through the following contact information :</h3>
        <div className="contact-container">
          <motion.div className="glass"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1, x: [-1000, 0] }}
            transition={{ duration: 1.5 }}
          >
            <form ref={formRef} onSubmit={handleSubmit}>
              {/* <h1>Contact Us Now</h1> */}

              <label >Name OR Name Company :</label>
              <input
                type="text"
                placeholder='EX: Ahmed'
                name='user_name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Your Email :</label>
              <input
                type="email"
                placeholder='EX: ahmed@example.com'
                name='user_email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Your Phone Number :</label>
              <input
                type="tel"
                placeholder='EX: 00963-992-999-999'
                name='user_number'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <label>Your Message :</label>
              <textarea
                type="text"
                rows="1"
                name='user_message'
                placeholder='.....'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </motion.div>
        </div>
      </div>
      <FooterSawa />
    </>
  )
}
export default Contact
// export default Transition(Contact);