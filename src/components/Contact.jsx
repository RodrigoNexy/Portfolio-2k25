import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { scrollReveal, textVariant, staggerContainer, staggerItem } from '../variants';
import { useTranslation } from '../hooks/useTranslation';
import '../components/contact.css';

const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <section id='contact' className='py-16 lg:section mt-22 final'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center lg:flex-row'>
          {/* text */}
          <div className='flex-1'>
            <motion.div
              variants={scrollReveal}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.h4 
                variants={textVariant(0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0.7}}
                className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'
              >
                {t('contact.subtitle')}
              </motion.h4>
              <motion.h2 
                variants={textVariant(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0.7}}
                className='text-[45px] lg:text-[90px] leading-none mb-12'
              >
                {t('contact.title').split(' ').map((word, i, arr) => i === arr.length - 1 ? <><br key={i} />{word}</> : <span key={i}>{word} </span>)}
              </motion.h2>
            </motion.div>
          </div>
          {/* icons */}
          <motion.div
            variants={staggerContainer(0.15, 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-center text-[90px]'
          >
            <div className="social-icons">
              <motion.a 
                variants={staggerItem}
                href='https://github.com/RodrigoNexy' 
                target="_blank" 
                className='social-icon'
              >
                <FaGithub />
                <h1>Github</h1>
              </motion.a>
              <motion.a 
                variants={staggerItem}
                href='https://www.linkedin.com/in/rodrigo-carvalho-a30b14209/' 
                target="_blank" 
                className='social-icon'
              >
                <FaLinkedinIn />
                <h1>LinkedIn</h1>
              </motion.a>
              <motion.a 
                variants={staggerItem}
                href='https://wa.me/5548999593922' 
                target="_blank" 
                className='social-icon'
              >
                <FaWhatsapp />
                <h1 className='mb-12'>WhatsApp</h1>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
