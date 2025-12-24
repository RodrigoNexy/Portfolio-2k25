import CountUp from 'react-countup';
// Interseção
import {useInView} from 'react-intersection-observer'
//motion
import {motion} from 'framer-motion'
// variaveis
import {fadeIn, scrollReveal, textVariant, staggerContainer, staggerItem, scaleIn} from '../variants'
import {Link} from 'react-scroll'
import {useTranslation} from '../hooks/useTranslation'

const About = () => {
  const { t } = useTranslation();
  const[ref, inView] =  useInView({
    threshold: 0.0, 
  });
  return <section id='about' className='section' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* IMG */}
        <motion.div 
        variants={scrollReveal}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat  h-[700px] mix-blend-lighten bg-top'></motion.div>
        {/* Text */}
        <motion.div
        variants={fadeIn('left', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}} className='flex-1'>
          <motion.h2 
            variants={textVariant(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.7}}
            className='h2 text-accent'
          >
            {t('about.title')}
          </motion.h2>
          <motion.h3 
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.7}}
            className='h3 mb-4'
          >
            {t('about.subtitle')}
          </motion.h3>
          <p className='mb-6'>{t('about.description')}</p>
          {/* Status */}
          <motion.div 
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.3}}
            className='flex gap-x-6 lg:gap-x-10 mb-12'
          >
            <motion.div variants={staggerItem}>
              <motion.div 
                variants={scaleIn(0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0.3}}
                className='text-[40px] font-tertiary text-gradient mb-2'
              >
                {
                  inView ?
                  <CountUp start={0} end={48} duration={5} /> : 20 } <p className='text-xs mt-2'>{t('about.stats.months')}</p>
              </motion.div>
              <div className='font-primary text-sm tracking-[2px]'>{t('about.stats.workExperience')}</div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <motion.div 
                variants={scaleIn(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0.3}}
                className='text-[40px] font-tertiary text-gradient mb-2'
              >
                {
                  inView ?
                  <CountUp start={0} end={20} duration={5} /> : 20 }
              </motion.div>
              <div className='font-primary text-sm tracking-[2px]'>{t('about.stats.servicesCompleted')}</div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <motion.div 
                variants={scaleIn(0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0.3}}
                className='text-[40px] font-tertiary text-gradient mb-2'
              >
                {
                  inView ?
                  <CountUp start={0} end={7} duration={5} /> : 7 }
              </motion.div>
              <div className='font-primary text-sm tracking-[2px]'>{t('about.stats.coursesCompleted')}</div>
            </motion.div>
          </motion.div>
          <motion.div 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.3}}
            className='flex gap-x-8 items-center'
          >
          <Link to='contact'
      activeClass='active'
      smooth={true}
      spy={true}
      offset={-200}>
        <button className='btn btn-lg'>{t('about.contactButton')}</button>
      </Link>
            <Link to='work'
      activeClass='active'
      smooth={true}
      spy={true}
      offset={-200}>
        <button className='text-gradient btn-link'>{t('about.portfolioButton')}</button>
      </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
