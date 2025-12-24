import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useTranslation } from '../hooks/useTranslation';

const WorksText = () => {
  const { t } = useTranslation();
  const experiences = t('worksText.experiences');

  return (
    <section id='experience' className='py-8 lg:py-24'>
      <div className='container mx-auto'>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='mb-12 lg:mb-16'
        >
          <h2 className='h2 text-accent text-center mb-4'>{t('worksText.title')}</h2>
        </motion.div>

        <div className='relative max-w-4xl mx-auto'>
          {/* Linha vertical */}
          <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-white/20 hidden lg:block'></div>

          {/* Timeline items */}
          <div className='space-y-12 lg:space-y-16'>
            {experiences.map((exp, index) => {
              const expId = exp.id || (index + 1);
              return (
              <motion.div
                key={expId}
                variants={fadeIn('right', 0.3 + index * 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className='relative flex items-start gap-8 lg:gap-12'
              >
                {/* Ponto na linha */}
                <div className='relative z-10 flex-shrink-0'>
                  <div className='w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-[#ff56f6] to-[#3bace2] flex items-center justify-center shadow-lg shadow-[#ff56f6]/30'>
                    <span className='text-white font-primary font-bold text-lg lg:text-xl'>
                      {String(expId).padStart(2, '0')}
                    </span>
                  </div>
                  {/* Linha conectando ao ponto (apenas no mobile) */}
                  <div className='absolute left-8 top-8 w-0.5 h-full bg-white/20 lg:hidden'></div>
                </div>

                {/* Conteúdo à direita */}
                <div className='flex-1 pt-2'>
                  <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-white/10 hover:border-white/20 transition-all duration-300'>
                    {/* Cabeçalho */}
                    <div className='mb-4'>
                      <h3 className='text-2xl lg:text-3xl font-primary font-bold text-accent mb-2'>
                        {exp.company}
                      </h3>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-2 mb-3'>
                        <span className='text-gradient font-semibold text-lg'>{exp.role}</span>
                        <span className='text-white/60 text-sm'>•</span>
                        <span className='text-white/80 text-sm'>{exp.period}</span>
                      </div>
                    </div>

                    {/* Descrição */}
                    <div className='space-y-2 mb-4'>
                      {exp.description.map((item, idx) => (
                        <p key={idx} className='text-white/80 text-sm lg:text-base leading-relaxed'>
                          {item}
                        </p>
                      ))}
                    </div>

                    {/* Tecnologias */}
                    <div className='mt-6 pt-4 border-t border-white/10'>
                      <p className='text-white/60 text-xs lg:text-sm mb-2 font-semibold uppercase tracking-wider'>
                        {t('worksText.technologies')}
                      </p>
                      <p className='text-gradient text-sm lg:text-base font-medium'>
                        {exp.technologies}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksText;
