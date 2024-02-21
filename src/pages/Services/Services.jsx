import React, { useEffect } from 'react'
import './Services.css'
import { motion } from 'framer-motion';
import Transition from '../../Components/Transition/Transition';
import OneService from '../../Components/OneService/OneService';
import serviceImage from './../../assets/service-page.jpg';
import FooterSawa from './../../Components/FooterSawa/FooterSawa';
import translateimg from './../../assets/translate-one.jpg';
import learnarimg from './../../assets/learnar-one.jpg'
import voiceimg from './../../assets/voice-one.jpg'
import websiteimg from './../../assets/website-one.jpg'
import newsimg from './../../assets/news-one.jpg'
import designimg from './../../assets/design-one.jpg'
import tourimg from './../../assets/tour-one.jpg'
import acadimicimg from './../../assets/acadimic-one.jpg'
import culturimg from './../../assets/cultur-one.jpg'
import businessimg from './../../assets/business-one.jpg'
import exportimg from './../../assets/export-one.png'
import dtbimg from './../../assets/DTP-one.jpg'
function Services() {
  const servicesOne = {
    translate: {
      title: 'Translation and Proofreading',
      text: 'Written (editorial) translation and simultaneous interpretation between Arabic and Japanese. Proofreading of texts in both Arabic and Japanese, as well as texts translated to and from Arabic and Japanese.'
    },
    learn: {
      title: 'Teaching Arabic and Japanese',
      text: 'Direct and online language teaching for non-native speakers of Arabic and Japanese, for various levels and age groups, tailored to the needs of each learner, provided by experienced language instructors with extensive expertise in language education for non-speakers.'
    },
    DTPone: {
      title: 'Desktop Publishing (DTP)',
      text: 'Providing desktop publishing services to assist individuals and companies in preparing and publishing written materials such as advertisements, product manuals, books, brochures, educational materials, and more. This includes professional preparation, production, translation, and publishing of written content.'
    },
    voiceOver: {
      title: 'Voice Recording and Transcription',
      text: 'Recording written texts in the form of audio files for documentation or various purposes such as voice advertisements and audiobooks in both Arabic and Japanese. Transcription of recorded voices in both Arabic and Japanese and their conversion into written texts and translation.'
    },
    news: {
      title: 'Planning and Preparing News Reports',
      text: 'Planning and preparing written and visual news articles and reports about Japan and Arab countries by a specialized media team, in both Arabic and Japanese.'
    },
    tour: {
      title: 'Planning and Preparing Touristic Tours',
      text: 'Planning and preparing touristic tours in Japan and Arab countries by our accredited clients, providing tourist guides and specialized interpreters for tourist guidance.'
    },
    acadimic: {
      title: 'Academic and Cultural Consultations',
      text: 'Providing academic and cultural consultations related to studying in Japan and Arab countries or conducting cultural activities in these regions. Supporting scientific research prepared in both Arabic and Japanese by coordinating, linguistically editing, and formatting it.'
    },
    cultur: {
      title: 'Support for Scientific and Cultural Exchange',
      text: 'Supporting projects and activities of scientific and cultural exchange between Japan and Arab countries through translating all related materials and dispatching translators specialized in Arabic and Japanese to their places of stay.'
    },
    website: {
      title: 'Adding Languages to Websites',
      text: 'Japanese languages to websites for individuals, profit and nonprofit organizations, private companies, governmental and international institutions, through our team of accredited translators and programmers.'
    },
    design: {
      title: 'Design and Programming',
      text: 'Designing logos, visual identities, and websites, preparing website content in both Arabic and Japanese, tailored to the purpose of the website, by a specialized and experienced team in design, programming, and content preparation.'
    },
    export: {
      title: 'Export and import​',
      text: 'Importing and exporting various types of products to and from Japan and Arab countries. Supporting import and export companies in conducting their business by providing consultations related to trade between Japan and Arab countries.'
    },
    business: {
      title: 'Investment and Business Consultations',
      text: 'Providing investment and business-related consultations for establishing and managing companies in Japan and Arab countries. Supporting business activities for Japanese and Arab companies by offering written and oral translation services.'
    }
  }
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
      <div className='services-page'>
      <div className="service-company-name">
          <motion.h1
            initial={{ opacity:0 , y : -50 }}
            animate={{ opacity: 1 , y : 0 }}
            transition={{duration : 1}}
            whileHover={{y : [-10 , 10, 0]}}
          >SAWA GROUP</motion.h1>
        </div>
        <motion.div className="service-page-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [200, 0] }}
          transition={{ duration: 1.5 }}
        >
          <img src={serviceImage} alt="service page Image" />
        </motion.div>
        <div className="services-page-container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <OneService position={"left"} image={translateimg} title={servicesOne.translate.title} text={servicesOne.translate.text} />
            </div>
            <div className="col-md-4 col-sm-12">
              <OneService position={"center"} image={learnarimg} title={servicesOne.learn.title} text={servicesOne.learn.text} />
            </div>
            <div className="col-md-4 col-sm-12">
              <OneService position={"right"} image={dtbimg} title={servicesOne.DTPone.title} text={servicesOne.DTPone.text} />
            </div>
          
          
            <div className="col-md-4 col-sm-12">
              <OneService position={"left"} image={voiceimg} title={servicesOne.voiceOver.title} text={servicesOne.voiceOver.text} />
            </div>
            <div className="col-md-4 col-sm-12">
              <OneService position={"center"} image={newsimg} title={servicesOne.news.title} text={servicesOne.news.text} />
            </div>
            <div className="col-md-4 col-sm-12">
              <OneService position={"right"} image={tourimg} title={servicesOne.tour.title} text={servicesOne.tour.text} />
            </div>
          
            <div className="col-md-4 col-sm-12">
              <OneService position={"left"} image={acadimicimg} title={servicesOne.acadimic.title} text={servicesOne.acadimic.text} />
            </div>
            <div className="col-md-4 col-sm-12">
              <OneService position={"center"} image={culturimg} title={servicesOne.cultur.title} text={servicesOne.cultur.text} />
            </div>
            <div className="col-md-4 col-sm-12">
              <OneService position={"right"} image={websiteimg} title={servicesOne.website.title} text={servicesOne.website.text} />
            </div>
            <div className="col-md-4 col-sm-12">
              <OneService position={"left"} image={designimg} title={servicesOne.design.title} text={servicesOne.design.text} />
            </div>
            <div className="col-md-4 col-sm-12">
              <OneService position={"center"} image={businessimg} title={servicesOne.business.title} text={servicesOne.business.text} />
            </div>
            <div className="col-md-4 col-sm-12">
              <OneService position={"right"} image={exportimg} title={servicesOne.export.title} text={servicesOne.export.text} />
            </div>
          </div>
        </div>
      </div>
      <FooterSawa />
    </>
  )
}
export default Services;
// export default tra;