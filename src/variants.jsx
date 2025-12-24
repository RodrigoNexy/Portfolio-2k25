// ============================================
// ANIMAÇÕES BÁSICAS - FADE IN
// ============================================
export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// ============================================
// SCROLL REVEAL - Animação ao entrar na viewport
// ============================================
export const scrollReveal = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

// ============================================
// STAGGER ANIMATION - Animação em cascata
// ============================================
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

// ============================================
// SCROLL-BASED ANIMATION - Animação baseada na posição do scroll
// ============================================
export const scrollProgress = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.1,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  }),
};

// ============================================
// SCALE ANIMATION - Animação de escala
// ============================================
export const scaleIn = (delay = 0) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: delay,
      },
    },
  };
};

// ============================================
// ROTATE ANIMATION - Animação de rotação
// ============================================
export const rotateIn = (direction = 'left', delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      rotate: direction === 'left' ? -180 : 180,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// ============================================
// SLIDE IN ANIMATION - Animação de deslizamento
// ============================================
export const slideIn = (direction = 'left', delay = 0) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '-100%' : direction === 'down' ? '100%' : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: delay,
      },
    },
  };
};

// ============================================
// BLUR ANIMATION - Animação com blur
// ============================================
export const blurIn = (delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      filter: 'blur(10px)',
    },
    show: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// ============================================
// TEXT ANIMATION - Animação para textos
// ============================================
export const textVariant = (delay = 0) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

// ============================================
// CONTAINER ANIMATION - Container com stagger
// ============================================
export const container = (staggerChildren = 0.1, delayChildren = 0) => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};
