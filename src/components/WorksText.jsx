import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const WorksText = () => {
  const experiences = [
    {
      id: 1,
      company: 'HealthTracker',
      period: '02/2025 a 12/2025',
      role: 'Desenvolvedor Fullstack (PJ)',
      description: [
        'Desenvolvimento de Plataforma de Saúde (Startup HealthTracker)',
        'Atuei como primeiro desenvolvedor full-time, responsável por construir a plataforma do zero.',
        'Desenvolvimento de soluções com Inteligência Artificial para apoiar médicos na análise de exames.',
        'Arquitetura e implementação de funcionalidades utilizando Ruby on Rails, React, JavaScript e REST APIs.',
        'Criação de um sistema robusto, escalável e intuitivo, garantindo usabilidade para diferentes perfis de usuários:',
        '• Médico: acesso completo à gestão de pacientes e exames e chat com IA.',
        '• Paciente: envio e acompanhamento de exames pela plataforma.',
        '• Médico convidado (guest): acesso restrito para visualização de pacientes compartilhados.',
        '• Colaborador (secretária): painel administrativo com permissões controladas.',
        'Landing Page HealthTracker - Desenvolvimento e publicação da landing page institucional da HealthTracker. Utilização de WordPress para construção rápida, responsiva e otimizada para conversão.'
      ],
      technologies: 'Ruby on Rails, React, JavaScript, REST APIs, WordPress'
    },
    {
      id: 2,
      company: 'HigiePro',
      period: '04/2024 a 12/2024',
      role: 'Desenvolvedor Fullstack',
      description: [
        'Empresa HIGIEPRO COMÉRCIO DE PRODUTOS DE HIGIENE PROFISSIONAL.',
        'Projeto Seller Portal: Construção de um Seller Portal no Retool, usando GraphQL para transformar dados da Shopify em gráficos e relatórios interativos, também criado funcionalidade para controle de estoque dos Sellers, para que as entregas fossem mais rápidas diminuindo de até 30 dias para entrega, para até 14 dias.',
        'Projeto E-commerce - Site: Criada loja da Prosupply, uma vertente da Higiepro, para venda de produtos, desenvolvimento de features faltantes na shopify.',
        'Projeto Loja.Higiepro e Higiepro - Manutenção de site: Manutenção de ambos sites que foram feitos com Php e Laravel.'
      ],
      technologies: 'GraphQL, Liquid (Shopify), TypeScript, JavaScript, Shopify REST API, Shopify GraphQL API, ReactJs, Node.js, PHP, Laravel, HTML, CSS'
    },
    {
      id: 3,
      company: 'Vista Software',
      period: '07/2023 a 04/2024',
      role: 'Analista de Suporte',
      description: [
        'Empresa de tecnologia da informação focada no desenvolvimento de software, sites, que opera em diversos negócios imobiliários.',
        'Customização avançada de temas e layouts em sites imobiliários.',
        'Solução de problemas de integração de APIs e sincronização com sistemas externos.',
        'Criação e configuração de e-mails institucionais.',
        'Implantação e gerenciamento de sites, desde o ambiente de hospedagem até a entrega final.'
      ],
      technologies: 'WordPress, PHP, MySQL, JavaScript, REST API, HTML, CSS'
    },
    {
      id: 4,
      company: 'Floripa Moto Week',
      period: '09/2022 a 12/2024',
      role: 'Desenvolvedor Full Stack - Freelancer oficial do evento',
      description: [
        'Floripa Moto Week é um dos maiores eventos de moto do estado de SC.',
        'Projeto site v1 (2023): Criado site para o Floripa Moto Week, com intuito de acrescentar leads, e gerar mais faturamento.',
        'Projeto site v2 (2024): Foi criado um site com integração de pagamentos próprios, com intuito de acrescentar leads, e gerar mais ingressos vendidos.'
      ],
      technologies: 'WordPress, Elementor, PHP, MySQL, Next.js, ReactJs, Node, PostgreSQL, Prisma (ORM), TypeScript, TailWindCSS, Shadcn'
    }
  ];

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
          <h2 className='h2 text-accent text-center mb-4'>Minhas Experiências</h2>
        </motion.div>

        <div className='relative max-w-4xl mx-auto'>
          {/* Linha vertical */}
          <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-white/20 hidden lg:block'></div>

          {/* Timeline items */}
          <div className='space-y-12 lg:space-y-16'>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
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
                      {String(exp.id).padStart(2, '0')}
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
                        Tecnologias:
                      </p>
                      <p className='text-gradient text-sm lg:text-base font-medium'>
                        {exp.technologies}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksText;
