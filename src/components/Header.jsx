import Logo from '../assets/logo.png';
import Curriculo from '../assets/Rodrigo Cv pt-br.pdf';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, scaleIn } from '../variants';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { FaGlobe } from 'react-icons/fa';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <motion.div 
      variants={fadeIn('down', 0.1)}
      initial="hidden"
      animate="show"
      className='py-8'
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <motion.a 
            href='#'
            variants={scaleIn(0.1)}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img className='w-[150px]' src={Logo} alt="Logo" />
          </motion.a>
          <div className='flex items-center gap-x-4'>
            <motion.button
              onClick={toggleLanguage}
              className='btn btn-sm flex items-center gap-x-2'
              variants={slideIn('right', 0.1)}
              initial="hidden"
              animate="show"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            >
              <FaGlobe />
              <span>{language === 'pt' ? 'EN' : 'PT'}</span>
            </motion.button>
            <motion.a 
              className="btn btn-sm pt-3" 
              href={Curriculo} 
              download="Rodrigo Cv pt-br.pdf"
              variants={slideIn('right', 0.2)}
              initial="hidden"
              animate="show"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('header.downloadCV')}
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
