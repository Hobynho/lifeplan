'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { LeadForm } from '@/components/sections/LeadForm'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { BenefitCard } from '@/components/sections/BenefitCard'
import { OperatorCard } from '@/components/sections/OperatorCard'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FAQSection } from '@/components/sections/FAQSection'
import { TestimonialCard } from '@/components/sections/TestimonialCard'

export default function HomePage() {
  const operators = [
    {
      name: 'Amil',
      description: 'Maior operadora do Brasil com excelente rede credenciada',
      rating: 4.7,
      reviews: 2400,
      highlight: 'Melhor cobertura',
    },
    {
      name: 'Hapvida',
      description: 'Pioneira em inovação e telemedicina',
      rating: 4.5,
      reviews: 1900,
      highlight: 'Telemedicina 24/7',
    },
    {
      name: 'SulAmérica',
      description: 'Especializada em planos corporativos',
      rating: 4.6,
      reviews: 1700,
      highlight: 'Melhor em SP',
    },
    {
      name: 'Unimed',
      description: 'Cooperativa com foco em qualidade',
      rating: 4.4,
      reviews: 1500,
      highlight: 'Melhor preço',
    },
    {
      name: 'Bradesco Saúde',
      description: 'Solidez do Banco com saúde de qualidade',
      rating: 4.5,
      reviews: 1200,
      highlight: 'Solidez financeira',
    },
    {
      name: 'Porto Seguro',
      description: 'Planos flexíveis e acessíveis',
      rating: 4.3,
      reviews: 900,
      highlight: 'Planos flexíveis',
    },
  ]

  const faqItems = [
    {
      id: '1',
      question: 'Como funciona o processo de cotação?',
      answer: 'Você preenche um formulário rápido com seus dados. Nosso time analisa as melhores opções e envia propostas personalizadas via WhatsApp em até 2 horas.',
    },
    {
      id: '2',
      question: 'Qual a cobertura do plano?',
      answer: 'Cada plano tem sua própria cobertura. Varia bastante conforme o tipo: Básico, Padrão ou Premium. Consultamos a rede de cada operadora.',
    },
    {
      id: '3',
      question: 'Qual é a carência?',
      answer: 'A carência depende do plano e operadora. Há opções com carência reduzida ou mesmo sem carência em algumas coberturas.',
    },
    {
      id: '4',
      question: 'Posso contratar plano para dependentes?',
      answer: 'Sim! Você pode incluir cônjuge e filhos no mesmo plano. Cada dependente pode ter valores diferentes.',
    },
    {
      id: '5',
      question: 'Preciso de autorização prévia?',
      answer: 'Depende do procedimento e do plano. Procedimentos eletivos geralmente precisam de autorização prévia da operadora.',
    },
  ]

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header />

      {/* Hero Section */}
      <Hero
        title="Encontre o Melhor Plano de Saúde"
        subtitle="Plataforma confiável"
        description="Cotação rápida, gratuita e transparente de operadoras como Amil, Hapvida, SulAmérica, Unimed e Bradesco."
        primaryCta={{
          label: 'Receber Cotação',
          href: '#form',
        }}
        secondaryCta={{
          label: 'Comparar Operadoras',
          href: '#operadoras',
        }}
      />

      {/* Por que escolher SaudePlus */}
      <Section py="lg" bg="white">
        <Container>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-display-md font-bold text-neutral-900 mb-4">
              Por que escolher SaudePlus?
            </h2>
            <p className="text-body-lg text-neutral-600">
              Somos especialistas em conectar você ao melhor plano de saúde com total transparência e segurança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BenefitCard
              icon="verified"
              title="100% Seguro"
              description="Seus dados são protegidos com criptografia de ponta a ponta."
              badge="LGPD Compliant"
              badgeVariant="success"
            />
            <BenefitCard
              icon="schedule"
              title="Até 2 Horas"
              description="Receba as melhores propostas rapidamente em seu WhatsApp."
              badge="Rápido"
              badgeVariant="info"
            />
            <BenefitCard
              icon="trending_up"
              title="Melhor Preço"
              description="Comparamos operadoras para você encontrar o melhor custo-benefício."
              badge="Economia"
              badgeVariant="secondary"
            />
          </div>
        </Container>
      </Section>

      {/* Form Section - Lead */}
      <div id="form">
        <LeadForm
          title="Receba uma Cotação Personalizada"
          description="Preencha seus dados e receba as melhores propostas de planos de saúde em até 2 horas"
          onSubmit={(data) => {
            console.log('Form submitted:', data)
            // Aqui você integraria com sua API
          }}
        />
      </div>

      {/* Operadoras */}
      <Section py="lg" bg="white" id="operadoras">
        <Container>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-display-md font-bold text-neutral-900 mb-4">
              Operadoras Parceiras
            </h2>
            <p className="text-body-lg text-neutral-600">
              Trabalhamos com as maiores e mais confiáveis operadoras de saúde do Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {operators.map((operator) => (
              <OperatorCard
                key={operator.name}
                name={operator.name}
                description={operator.description}
                rating={operator.rating}
                reviews={operator.reviews}
                highlight={operator.highlight}
                onCta={() => {
                  console.log(`Clicked on ${operator.name}`)
                }}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Como Funciona */}
      <Section py="lg">
        <Container>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-display-md font-bold text-neutral-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-body-lg text-neutral-600">
              Simples, rápido e seguro. Confira os 4 passos principais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Preencha seus Dados',
                description: 'Dados básicos para análise das melhores opções',
              },
              {
                step: '2',
                title: 'Análise Personalizada',
                description: 'Nossa equipe compara operadoras para você',
              },
              {
                step: '3',
                title: 'Receba Propostas',
                description: 'Cotações claras via WhatsApp ou email',
              },
              {
                step: '4',
                title: 'Contrate com Segurança',
                description: 'Você escolhe e contrata o plano ideal',
              },
            ].map((item) => (
              <Card key={item.step}>
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-h4 font-bold text-neutral-900">{item.title}</h3>
                  <p className="text-body-sm text-neutral-600">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Estatísticas */}
      <Section py="lg" bg="primary-900">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white text-center">
            <div>
              <p className="text-display-lg font-bold mb-2">50K+</p>
              <p className="text-body-lg">Cotações Realizadas</p>
            </div>
            <div className="border-l border-r border-primary-700 px-6">
              <p className="text-display-lg font-bold mb-2">4.8☆</p>
              <p className="text-body-lg">Avaliação Média</p>
            </div>
            <div>
              <p className="text-display-lg font-bold mb-2">24h</p>
              <p className="text-body-lg">Suporte Ativo</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <FAQSection
        title="Dúvidas Frequentes"
        description="Encontre respostas para as perguntas mais comuns sobre planos de saúde"
        items={faqItems}
      />

      {/* Testimonials */}
      <Section py="lg" bg="white">
        <Container>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-display-md font-bold text-neutral-900 mb-4">
              O que os Clientes Dizem
            </h2>
            <p className="text-body-lg text-neutral-600">
              Satisfação de clientes é o nosso maior troféu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              author="Maria Lima"
              role="São Paulo, SP"
              content="Adorei o atendimento! Encontrei um plano muito melhor pelo mesmo preço. Muito grata!"
              rating={5}
            />
            <TestimonialCard
              author="Carlos Santos"
              role="Rio de Janeiro, RJ"
              content="Processo rápido e transparente. Recomendo para todas minhas amigas. Muito bom mesmo!"
              rating={5}
            />
            <TestimonialCard
              author="Juliana Costa"
              role="Belo Horizonte, MG"
              content="Profissionais muito atenciosos. Tiraram todas as minhas dúvidas. Fechei meu plano em 30 minutos!"
              rating={5}
            />
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section py="lg" bg="primary-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md font-bold text-neutral-900 mb-4">
              Pronto para encontrar seu plano?
            </h2>
            <p className="text-body-lg text-neutral-600 mb-8">
              Receba uma cotação personalizada em até 2 horas. Totalmente grátis e sem compromisso.
            </p>
            <Button size="lg">
              Cotar Agora
            </Button>
          </div>
        </Container>
      </Section>

      {/* Navigation Sections */}
      <Section py="lg" bg="white">
        <Container>
          <h2 className="text-display-md font-bold text-neutral-900 mb-12 text-center">
            Explore Mais Opções
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="/operadoras"
              className="p-8 border border-neutral-200 rounded-lg hover:shadow-lg transition-all duration-200 group"
            >
              <span className="material-symbols-outlined text-4xl text-primary-500 mb-4 group-hover:scale-110 transition-transform">
                domain
              </span>
              <h3 className="text-h4 font-bold text-neutral-900 mb-2">Operadoras</h3>
              <p className="text-body-md text-neutral-600 mb-4">
                Conheça em detalhes as principais operadoras de saúde
              </p>
              <span className="text-primary-500 font-semibold inline-flex items-center">
                Saiba mais
                <span className="material-symbols-outlined text-sm ml-2 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </span>
            </a>

            <a
              href="/tipos-de-plano"
              className="p-8 border border-neutral-200 rounded-lg hover:shadow-lg transition-all duration-200 group"
            >
              <span className="material-symbols-outlined text-4xl text-secondary-500 mb-4 group-hover:scale-110 transition-transform">
                description
              </span>
              <h3 className="text-h4 font-bold text-neutral-900 mb-2">Tipos de Plano</h3>
              <p className="text-body-md text-neutral-600 mb-4">
                Descubra qual tipo de plano é mais adequado para você
              </p>
              <span className="text-secondary-500 font-semibold inline-flex items-center">
                Explorar
                <span className="material-symbols-outlined text-sm ml-2 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </span>
            </a>

            <a
              href="/cidades"
              className="p-8 border border-neutral-200 rounded-lg hover:shadow-lg transition-all duration-200 group"
            >
              <span className="material-symbols-outlined text-4xl text-accent-500 mb-4 group-hover:scale-110 transition-transform">
                location_city
              </span>
              <h3 className="text-h4 font-bold text-neutral-900 mb-2">Por Cidade</h3>
              <p className="text-body-md text-neutral-600 mb-4">
                Veja operadoras disponíveis em sua região
              </p>
              <span className="text-accent-500 font-semibold inline-flex items-center">
                Buscar
                <span className="material-symbols-outlined text-sm ml-2 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </span>
            </a>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  )
}
