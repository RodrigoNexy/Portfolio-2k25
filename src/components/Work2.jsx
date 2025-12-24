// motion
import {motion} from 'framer-motion';
// variaveis
import {scaleIn, staggerContainer, staggerItem} from '../variants';
//img
import img4 from '../assets/LAVANDERIA EFICIENTE.png';
import img5 from '../assets/SCHAPPO.png';
import img6 from '../assets/PROSUPPLY.png';
import img8 from '../assets/HIGIEPRO.png';
import { useTranslation } from '../hooks/useTranslation';

const Work2 = () => {
  const { t } = useTranslation();
  return <section id='work' className=''>
    <div className='container mx-auto '>
      <motion.div 
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.2}}
        className='flex flex-col lg:flex-row gap-x-10'
      >
        <motion.div 
          variants={staggerItem}
          className='flex-1 flex flex-col gap-y-10'
        >
          {/* img */}
          <motion.div 
            variants={scaleIn(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.3}}
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
          >
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img5} alt="Schappo"></img>
            <div className='absolute -bottom-full left-3 group-hover:top-2 transition-all duration-500 z-50'><span className='text-gradient'>{t('work2.projects.0.description')}</span></div>
            <div className='absolute -bottom-full left-3 group-hover:bottom-14 transition-all duration-700 z-50'>
               </div>
          </motion.div>
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
            <img className='group-hover:scale-125 transition-all duration-500' src={img6} alt="Prosupply"></img>
            <div className='absolute -bottom-full left-3 group-hover:top-5 transition-all duration-500 z-50'><span className='text-gradient'>{t('work2.projects.1.description')}</span></div>
            <div className='absolute -bottom-full left-3 group-hover:bottom-14 transition-all duration-700 z-50'>
              <a target="_blank" href='https://prosupply.com.br'><button className='btn btn-sm absolute -bottom-full left-0 group-hover:top-0  transition-all duration-700 z-50'>{t('work2.projects.1.seeProject')}</button></a>
              <a target="_blank" href='https://github.com/RodrigoNexy/Playground_shopify'><button className='btn btn-sm absolute -bottom-full left-32 group-hover:top-0  transition-all duration-700 z-50'>{t('work2.projects.1.repository')}</button></a>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          variants={staggerItem}
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
            <img className='group-hover:scale-125 transition-all duration-500' src={img4} alt="Lavanderia Eficiente"></img>
            <div className='absolute -bottom-full left-3 group-hover:top-2 transition-all duration-500 z-50'><span className='text-gradient'>{t('work2.projects.2.description')}</span></div>
            <div className='absolute -bottom-full left-3 group-hover:bottom-14 transition-all duration-700 z-50'>
                <a target="_blank" href='https://lavanderiaeficiente.com.br'><button className='btn btn-sm absolute -bottom-full left-0 group-hover:top-0  transition-all duration-700 z-50'>{t('work2.projects.2.repository')}</button></a>
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
            <img className='group-hover:scale-125 transition-all duration-500' src={img8} alt="Higiepro"></img>
            <div className='absolute -bottom-full left-3 group-hover:top-5 transition-all duration-500 z-50'><span className='text-gradient'>{t('work2.projects.3.description')}</span></div>
            <div className='absolute -bottom-full left-3 group-hover:bottom-14 transition-all duration-700 z-50'>
              <a target="_blank" href='https://higiepro.com.br'><button className='btn btn-sm absolute -bottom-full left-0 group-hover:top-0  transition-all duration-700 z-50'>{t('work2.projects.3.seeProject')}</button></a>
              </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </section>;
};

export default Work2;
