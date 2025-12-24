import CountUp from 'react-countup';
// Interseção
import {useInView} from 'react-intersection-observer'
//motion
import {motion} from 'framer-motion'
// variaveis
import {fadeIn} from '../variants'
import {Link} from 'react-scroll'

const About = () => {
  const[ref, inView] =  useInView({
    threshold: 0.0, 
  });
  return <section id='about' className='section' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* IMG */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat  h-[700px] mix-blend-lighten bg-top'></motion.div>
        {/* Text */}
        <motion.div
        variants={fadeIn('left', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}} className='flex-1'>
          <h2 className='h2 text-accent'>Sobre Mim</h2>
          <h3 className='h3 mb-4'>Eu sou um Desenvolvedor FullStack</h3>
          <p className='mb-6'>Sou Desenvolvedor Full Stack, formado em Análise e Desenvolvimento de Sistemas, com experiência no desenvolvimento de plataformas web, e-commerces e sistemas SaaS.

Minha trajetória profissional começou no universo criativo, atuando como Designer Gráfico, Editor de Vídeo e Filmmaker, o que me proporcionou uma base sólida em design, usabilidade e experiência do usuário. Com o tempo, encontrei na programação o equilíbrio entre criatividade e lógica, área na qual atuo profissionalmente desde 2023.

Atuei como primeiro desenvolvedor full-time de uma startup de saúde, sendo responsável por construir a plataforma do zero, participando de decisões de arquitetura, integrações com APIs e desenvolvimento de funcionalidades com Inteligência Artificial voltadas ao apoio médico.

Também possuo experiência com e-commerces e sistemas internos, especialmente no ecossistema Shopify, trabalhando com Liquid, GraphQL e APIs, além de manutenção e desenvolvimento de aplicações com React, Ruby on Rails, Node.js e PHP.

Tenho maior afinidade com Front-End, criando interfaces intuitivas e performáticas, mas atuo de forma completa no Back-End, sempre focado em soluções escaláveis, bem estruturadas e orientadas ao negócio.
          </p>
          {/* Status */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={48} duration={5} /> : 20 } <p className='text-xs mt-2'>Meses</p>
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Experiência de <br />Trabalho</div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={20} duration={5} /> : 20 }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Serviços e<br /> projetos<br />Concluidos</div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={7} duration={5} /> : 7 }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Cursos <br />Concluidos</div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
          <Link to='contact'
      activeClass='active'
      smooth={true}
      spy={true}
      offset={-200}>
        <button className='btn btn-lg'>Entre em Contato</button>
      </Link>
            <Link to='work'
      activeClass='active'
      smooth={true}
      spy={true}
      offset={-200}>
        <button className='text-gradient btn-link'>Meu Portfólio</button>
      </Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
