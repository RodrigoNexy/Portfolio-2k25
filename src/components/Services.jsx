//motion
import {motion} from 'framer-motion';
//Variants
import {fadeIn, staggerContainer, staggerItem} from '../variants';
import {Link} from 'react-scroll'
import {useTranslation} from '../hooks/useTranslation'

const Services = () => {
  const { t } = useTranslation();
  
  // Usar traduções dinâmicas
  const translatedServices = t('services.courses');

  return <section id='services' className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div 
        variants={fadeIn('up', 0.3)} 
        initial="hidden" 
        whileInView={'show'}
         viewport={{once: false, amount: 0.7}} className='flex-1 lg:bg-about bg-contain lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'> 
          <h2 className='h2 text-accent mb-6'>{t('services.title')}</h2>
          <h3 className='h3 max-w-[455px] mb-16'>{t('services.subtitle')}</h3>
          <Link to='work'
      activeClass='active'
      smooth={true}
      spy={true}
      offset={-200}>
        <button className='btn btn-sm'>{t('services.seeWorks')}</button>
      </Link>
        </motion.div>
        {/* cursos */}
        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount: 0.3}}
          className='flex-1'
        >
          {/* cursos lista */}
          <div>
            {translatedServices.map((services, index)=>{
              const{name, description} = services;
              return (
                <motion.div
                  variants={staggerItem}
                  className='border-b border-white/20  mb-[38px] flex' 
                  key={index}
                >
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
