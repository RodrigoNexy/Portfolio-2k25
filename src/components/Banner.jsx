
import Image from '../assets/avatar.png';
import {FaGithub, FaLinkedinIn, FaWhatsapp} from 'react-icons/fa';
// type  animation
import {TypeAnimation} from 'react-type-animation'
//motion
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import {Link} from 'react-scroll'
import {useTranslation} from '../hooks/useTranslation'
import {useLanguage} from '../contexts/LanguageContext'

const Banner = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const typewriterSequence = language === 'pt' 
    ? [
        t('banner.typewriter.fullstack'),
        2000,
      ]
    : [
        t('banner.typewriter.fullstack'),
        2000,
      ];
  return <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'> 
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up', 0.3)} 
          initial="hidden" 
          whileInView={'show'}
           viewport={{once: false, amount: 0.7}} className='mb-2 text-[50px]  leading-[1] lg:text-[50px]'>Rodrigo <span>Carvalho</span></motion.h1>
          <motion.div
          variants={fadeIn('up', 0.4)} 
          initial="hidden" 
          whileInView={'show'}
           viewport={{once: false, amount: 0.7}}
            className='mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading[1]'>
            <span className='text-white mr-4'>{t('banner.iAm')}</span>
            <TypeAnimation 
              sequence={typewriterSequence}
              speed={50}
              deletionSpeed={75}
              className="text-accent"
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          <motion.p
          variants={fadeIn('up', 0.5)} 
          initial="hidden" 
          whileInView={'show'}
           viewport={{once: false, amount: 0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>{t('banner.location')}</motion.p>
          <motion.div
          variants={fadeIn('up', 0.6)} 
          initial="hidden" 
          whileInView={'show'}
           viewport={{once: false, amount: 0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <Link to='contact'
      activeClass='active'
      smooth={true}
      spy={true}
      offset={-200}>
        <button className='btn btn-lg'>{t('banner.contactButton')}</button>
      </Link>
            <Link to='work'
      activeClass='active'
      smooth={true}
      spy={true}
      offset={-200}>
        <button className='text-gradient btn-link'>{t('banner.portfolioButton')}</button>
      </Link>
          </motion.div>
          {/* Redes sociais */}
          <motion.div
          variants={fadeIn('up', 0.7)} 
          initial="hidden" 
          whileInView={'show'}
           viewport={{once: false, amount: 0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto
          lg:mx-0'>
            <a href='https://github.com/RodrigoNexy' target="_blank">
              <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/rodrigo-carvalho-a30b14209/' target="_blank">
              <FaLinkedinIn />
            </a>
            <a href='https://wa.link/v797a6' target="_blank">
              <FaWhatsapp />
            </a>
          </motion.div>
        </div>
        {/* IMG */}
        <motion.div 
        variants={fadeIn('down', 0.3)} 
        initial="hidden" 
        whileInView={'show'}
         className='w-[400px]  lg:max-w-[430px]'>
          <img src={Image}/>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
