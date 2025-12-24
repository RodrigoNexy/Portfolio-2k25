//import icons
import { BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsChatSquareText, BsClockHistory} from 'react-icons/bs';
// LINK
import {Link} from 'react-scroll'
// motion
import {motion} from 'framer-motion';
// variants
import { slideIn} from '../variants';

const Nav = () => {
  const navItems = [
    { icon: BiHomeAlt, to: 'home' },
    { icon: BiUser, to: 'about' },
    { icon: BsClockHistory, to: 'experience' },
    { icon: BsBriefcase, to: 'work' },
    { icon: BsClipboardData, to: 'services' },
    { icon: BsChatSquareText, to: 'contact' },
  ];

  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
    <motion.div 
      variants={slideIn('up', 0.3)}
      initial="hidden"
      animate="show"
      className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between
     items-center text-2xl text-white/50'
    > 
      {navItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.to}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.1,
              type: 'spring',
              stiffness: 300,
              damping: 20
            }}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link 
              to={item.to}
              activeClass='active'
              smooth={true}
              spy={true}
              offset={item.to === 'home' ? -200 : 0}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            >
              <Icon />
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
    </div>
  </nav>;
};

export default Nav;
