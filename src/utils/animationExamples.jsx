/**
 * EXEMPLOS DE USO DAS ANIMAÇÕES
 * 
 * Este arquivo contém exemplos práticos de como usar todas as animações
 * disponíveis no projeto. Use como referência ao implementar novas animações.
 */

import { motion } from 'framer-motion';
import {
  fadeIn,
  scrollReveal,
  staggerContainer,
  staggerItem,
  scrollProgress,
  scaleIn,
  rotateIn,
  slideIn,
  blurIn,
  textVariant,
  container,
} from '../variants';
import { useScrollAnimation, useScrollProgress } from '../hooks/useScrollAnimation';

// ============================================
// EXEMPLO 1: FADE IN (Básico)
// ============================================
export const ExampleFadeIn = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
    >
      Conteúdo que aparece com fade in
    </motion.div>
  );
};

// ============================================
// EXEMPLO 2: SCROLL REVEAL
// ============================================
export const ExampleScrollReveal = () => {
  return (
    <motion.div
      variants={scrollReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      Conteúdo que aparece ao fazer scroll
    </motion.div>
  );
};

// ============================================
// EXEMPLO 3: STAGGER ANIMATION (Cascata)
// ============================================
export const ExampleStagger = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <motion.div
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      {items.map((item, index) => (
        <motion.div key={index} variants={staggerItem}>
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
};

// ============================================
// EXEMPLO 4: SCROLL-BASED ANIMATION
// ============================================
export const ExampleScrollBased = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={scrollProgress}
          custom={index}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

// ============================================
// EXEMPLO 5: SCALE IN
// ============================================
export const ExampleScaleIn = () => {
  return (
    <motion.div
      variants={scaleIn(0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      Conteúdo que aparece com escala
    </motion.div>
  );
};

// ============================================
// EXEMPLO 6: ROTATE IN
// ============================================
export const ExampleRotateIn = () => {
  return (
    <motion.div
      variants={rotateIn('left', 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      Conteúdo que aparece com rotação
    </motion.div>
  );
};

// ============================================
// EXEMPLO 7: SLIDE IN
// ============================================
export const ExampleSlideIn = () => {
  return (
    <motion.div
      variants={slideIn('left', 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      Conteúdo que desliza para dentro
    </motion.div>
  );
};

// ============================================
// EXEMPLO 8: BLUR IN
// ============================================
export const ExampleBlurIn = () => {
  return (
    <motion.div
      variants={blurIn(0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      Conteúdo que aparece removendo blur
    </motion.div>
  );
};

// ============================================
// EXEMPLO 9: TEXT VARIANT
// ============================================
export const ExampleTextVariant = () => {
  return (
    <motion.h1
      variants={textVariant(0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
    >
      Título animado
    </motion.h1>
  );
};

// ============================================
// EXEMPLO 10: USANDO O HOOK useScrollAnimation
// ============================================
export const ExampleWithHook = () => {
  const { ref, inView } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div ref={ref}>
      {inView && <div>Conteúdo visível!</div>}
    </div>
  );
};

// ============================================
// EXEMPLO 11: USANDO useScrollProgress
// ============================================
export const ExampleScrollProgress = () => {
  const { scrollY, scrollProgress } = useScrollProgress();

  return (
    <div>
      <p>Scroll Y: {scrollY}px</p>
      <p>Progresso: {(scrollProgress * 100).toFixed(2)}%</p>
      <div
        style={{
          width: `${scrollProgress * 100}%`,
          height: '4px',
          background: 'linear-gradient(to right, #ff56f6, #3bace2)',
        }}
      />
    </div>
  );
};

// ============================================
// EXEMPLO 12: COMBINAÇÃO DE ANIMAÇÕES
// ============================================
export const ExampleCombined = () => {
  return (
    <motion.div
      variants={container(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2 variants={textVariant(0.1)}>Título</motion.h2>
      <motion.p variants={fadeIn('up', 0.2)}>Parágrafo 1</motion.p>
      <motion.p variants={fadeIn('up', 0.3)}>Parágrafo 2</motion.p>
      <motion.div variants={scaleIn(0.4)}>
        <img src="..." alt="Imagem" />
      </motion.div>
    </motion.div>
  );
};

