// motion
import {motion} from 'framer-motion';
// variaveis
import { scrollReveal, scaleIn} from '../variants';
//img
import img1 from '../assets/FLORIPA MOTO WEEK.png';
import img2 from '../assets/APPCORRIGIDO.png';
import img3 from '../assets/TEMPLATE.png';
import { useTranslation } from '../hooks/useTranslation';
import '../components/contact.css';

const Work = () => {
  const { t } = useTranslation();
  return <section id='work' className='section doido'>
    <div className='container mx-auto '>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
          variants={scrollReveal}
          initial="hidden" 
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
        >
          {/* text */}
          <div className='flex-1 flex flex-col gap-y-10'>
            <h2 className='h2 leading-tight text-accent'>{t('work.title').split(' ').map((word, i, arr) => i === arr.length - 1 ? <><br key={i} />{word}</> : <span key={i}>{word} </span>)}</h2>
            <a href='https://github.com/RodrigoNexy' target="_blank"><button className='btn btn-sm'>{t('work.seeAllProjects')}</button></a>
          </div >
          {/* image */}
          <motion.div 
            variants={scaleIn(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.3}}
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
          >
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="Floripa Moto Week"></img>
            <div className='absolute -bottom-full left-3 group-hover:top-5 transition-all duration-500 z-50'><span className='text-gradient'>{t('work.projects.0.description')}</span></div>
            <div className='absolute -bottom-full left-3 group-hover:bottom-14 transition-all duration-700 z-50'>
              <a target="_blank" href='https://floripamotoweek.com.br'><button className='btn btn-sm absolute -bottom-full  group-hover:top-0  transition-all duration-700 z-50'>{t('work.seeProject')}</button></a>
              </div >
          </motion.div>
        </motion.div>
        <motion.div 
          variants={scrollReveal}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-10'
        >
          {/* img */}
          <motion.div 
            variants={scaleIn(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.3}}
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
          >
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt="App Barbearia"></img>
            <div className='absolute -bottom-full left-3 group-hover:top-2 transition-all duration-500 z-50'><span className='text-gradient'>{t('work.projects.1.description')}</span></div>
            <div className='absolute -bottom-full left-3 group-hover:bottom-14 transition-all duration-700 z-50'>
            <a target="_blank" href='https://github.com/RodrigoNexy/App-Barbearia-2k25'><button className='btn btn-sm absolute -bottom-full left-0 group-hover:top-0  transition-all duration-700 z-50'>{t('work.repository')}</button></a>
            </div>
          </motion.div>
          <motion.div 
            variants={scaleIn(0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.3}}
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
          >
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt="Template Landing Page"></img>
            <div className='absolute -bottom-full left-3 group-hover:top-5 transition-all duration-500 z-50'><span className='text-gradient'>{t('work.projects.2.description')}</span></div>
            <div className='absolute -bottom-full left-3 group-hover:bottom-14 transition-all duration-700 z-50'>
            <a target="_blank" href='https://github.com/RodrigoNexy/Theme_LandingPage'><button className='btn btn-sm absolute -bottom-full left-0 group-hover:top-0  transition-all duration-700 z-50'>{t('work.repository')}</button></a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Work;
