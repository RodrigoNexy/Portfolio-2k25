import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

/**
 * Hook customizado para animações baseadas em scroll
 * Segue o princípio Single Responsibility - apenas gerencia scroll animations
 * 
 * @param {Object} options - Opções de configuração
 * @param {number} options.threshold - Porcentagem do elemento visível (0-1)
 * @param {boolean} options.triggerOnce - Se deve animar apenas uma vez
 * @param {number} options.rootMargin - Margem do root para trigger
 * @returns {Object} - { ref, inView, hasAnimated }
 */
export const useScrollAnimation = ({
  threshold = 0.1,
  triggerOnce = false,
  rootMargin = '0px',
} = {}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return {
    ref,
    inView,
    hasAnimated,
  };
};

/**
 * Hook para animações baseadas no progresso do scroll
 * Útil para animações que dependem da posição do scroll na página
 * 
 * @returns {Object} - { scrollY, scrollProgress }
 */
export const useScrollProgress = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const maxScroll = documentHeight - windowHeight;
      
      setScrollY(scrollTop);
      setScrollProgress(maxScroll > 0 ? scrollTop / maxScroll : 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Inicializa

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollProgress };
};

